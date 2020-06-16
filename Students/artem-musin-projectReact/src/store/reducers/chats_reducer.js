import update from 'react-addons-update';

import {SUCCESS_CHATS_LOADING, SUCCESS_CHAT_ADDING} from '../actions/chats_actions.js';

let initialStore = {
    chats: {}
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_CHATS_LOADING: {
            console.log(action)
            let dto = action.payload;
            let chats = {};

            dto.forEach(d => {
                chats[d._id] = { title: d.title }
            });

            return update(store, {
                chats: { $set: chats }
            });
        }

        case SUCCESS_CHAT_ADDING: {
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
    }
}

