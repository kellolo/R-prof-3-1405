import update from 'react-addons-update';

import { ADD_CHAT } from '../actions/chats_actions.js'

let initialStore = {
    chats: {
        1: {
            title: 'chat_1',
            messagesList: []
        },
        2: {
            title: 'chat_2',
            messagesList: []
        },
        3: {
            title: 'chat_3',
            messagesList: []
        },
    }
}


export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let chatId = Object.keys(store.chats).length + 1;

            return update (store, {
                chats: {
                    $merge: {
                        [chatId]:{
                            title: action.title,
                            messagesList: []
                        }
                    }
                }
            })
        }
        default: return store
    }
}

