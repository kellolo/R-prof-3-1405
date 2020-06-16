import update from 'react-addons-update';

import {SUCCESS_CHATS_LOADING, SUCCESS_CHAT_ADDING} from '../actions/chats_actions.js';

let initialStore = {
    chats: {}
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_CHAT_ADDING: {
            if (action.payload.response.status) {
                return update(store, {
                    chats: {
                        $merge: {
                            [action.payload.chat.chatId]: {
                                title: action.payload.chat.title,
                                messagesList: []
                            }
                        }
                    }
                })
            } else {
                console.log('Error with adding chat', action.payload)
                return null
            }

            
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload }
            })
        }
        default: 
            return store;
    }
}

