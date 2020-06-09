import update from "react-addons-update";

import { SUCCESS_CHATS_LOADING } from '../actions/chats_actions.js';
import { SUCCESS_CHAT_ADD } from '../actions/chats_actions.js';

let initialStore = {
    chats: {}
};

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_CHAT_ADD: {
            let chatId = action.payload._id;
            let title = action.payload.title;
                return update(store, {
                    chats: {
                        $merge: {
                            [chatId]: { title }
                        }
                    }
                });
        };
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
        default:
            return store;
    };
};