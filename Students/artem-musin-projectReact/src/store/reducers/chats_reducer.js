import update from 'react-addons-update';

import { ADD_CHAT } from '../actions/chats_actions.js';

let initialStore = {
    chats: {
        1: {
            title: 'George Washington',
            messagesList:[]
        },
        2: {
            title: 'Pamela Anderson',
            messagesList:[]
        },
        3: {
            title: 'Tom Cruise',
            messagesList:[]
        },
    }
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let chatId = Date.now();

            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            messagesList: []
                        }
                    }
                }
            })
        }
        default: 
            return store;
    }
}

