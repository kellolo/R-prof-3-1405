import update from  'react-addons-update';

import { SUCCESS_CHAT_ADD, SUCCESS_CHAT_LOADING } from '../actions/chats_actions.js';
import { SUCCESS_MESSAGE_SEND, SUCCESS_MESSAGES_LOADING } from '../actions/messages_actions.js';

let initialStore = {
    chats: {}
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_CHAT_ADD: {

            if(action.payload.response.status) {

                // let chatId = Object.keys(store.chats).length + 1;

                return update(store, {
                    chats: { $merge: { [action.payload.chat.chatId]: { title: action.payload.chat.title, messagesList: [] } } }
                });
            } else {
                console.log('Error add chat', action.payload);
                return null;                
            }
        }
        case SUCCESS_CHAT_LOADING: {
            return update(store, {
                chats: { $set: action.payload }
            })
        }
        case SUCCESS_MESSAGE_SEND: {
            const chats = {...store.chats};

            if(action.payload.response.status) {

                let messagesListArr = chats[action.payload.msg.chatId].messagesList.push(action.payload.msg.messageId);

                return update(store, {
                    chats: {
                        $merge: {
                            [action.payload.msg.chatId]: {
                                title: chats[action.payload.msg.chatId].title,
                                messagesList: [messagesListArr]
                            }
                        }
                    }
                })
            }
            
        }
        case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            
            /* Object.keys(action.payload).map(key => {
                const id = action.payload[key].chatId;
                chats[id].messagesList.push(key);
            }); */
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false }
            });
        }
        default:
            return store;
    }
}