import update from "react-addons-update";

import { SUCCESS_CHATS_LOADING } from '../actions/chats_actions.js';
import { SUCCESS_CHAT_ADD } from '../actions/chats_actions.js';

let initialStore = {
    chats: {}
};

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_CHAT_ADD: {
            if(action.payload.response.status) {
                let chatId = Object.keys(store.chats).length + 1;

                return update(store, {
                    chats: {
                        $merge: {
                            [chatId]: {
                                title: action.payload.chat.title,
                                messagesList: []
                            }
                        }
                    }
                });
            } else {
                console.log('Error add chat', action.payload);
                return null
            }
        };
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload }
            })
        }
        default:
            return store;
    };
};