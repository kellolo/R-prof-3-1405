import update from "react-addons-update";

import { ADD_CHAT } from '../actions/chats_actions.js';

let initialstore = {
    chats: {
        1: {
            title: 'chat_1',
            massagesList: []
        },
        2: {
            title: 'chat_2',
            massagesList: []
        },
        3: {
            title: 'chat_3',
            massagesList: []
        }
    }
}

export default function chatsReducer(store = initialstore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let chatId = Object.keys(store.chats).length + 1;

            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            massagesList: []
                        }
                    }
                }
            });
        }
        default: return store;
    }
}
