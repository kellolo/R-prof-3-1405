import update from "react-addons-update";

//actions
import { SUCCESS_CHAT_CREATE, SUCCESS_CHATS_LOADING, ERROR_CHAT_CREATE } from '../actions/chats_actions.js'; 
import chat from "../../../server/db/models/chat.js";
import { $CombinedState } from "redux";

let initialStore = {
    chats: {}
};

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_CHATS_LOADING: {
            let dto = action.payload;
            let chats = {};

            dto.forEach(d => {
                chats[d._id] = { title: d.title }
            });

            return update(store, {
                chats: { $set: chats }
            });
        }
        // case ADD_CHAT: {
        //     let chatId = Object.keys(store.chats).length + 1;
        //     return update(store, {
        //         chats: {
        //             $merge: {
        //                 [chatId]: {
        //                     title: action.title,
        //                     messagesList: []
        //                 }
        //             }
        //         }
        //     });
        // }
        // case SUCCESS_CHATS_LOADING: {
        //     return update(store, {
        //         chats: { $set: action.payload }
        //     })
        // }
        case SUCCESS_CHAT_CREATE: {
            let chatId = action.payload._id;
            let title = action.payload.title;

            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: { title }
                    }
                }
            })
        }
        default:
             return store;
    };
};