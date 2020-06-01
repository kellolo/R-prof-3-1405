import update from  'react-addons-update';

import { ADD_CHAT } from '../actions/chats_actions.js';

let initialStore = {
    chats: {
        1: {    
            title: 'Brendan Lim',
            messagesList: []
        },
        2: {
            title: 'Eric Hoffman',
            messagesList: []
        },
        3: {
            title: 'Чат 3',
            messagesList: []
        }
    }
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let chatId = Object.keys(store.chats).length + 1;

            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            messagesList: []
                        }
                    }
                }
            });
        }
        default:
            return store;
    }
}