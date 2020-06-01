import update from 'react-addons-update';

// import actions 

import { SEND_MSG } from '../actions/messages_actions.js';
import { ADD_CHAT } from '../actions/chats_actions.js'


const initialStore = {
    messages: {
        1: {
            user: null,
            text: 'Hello, human. What do you need from me?'
        },
        2: {
            user: null,
            text: 'Hi again, human'
        }
    },
    chats: {
        1: {title: 'Chat room 1', messageList: [1]},
        2: {title: 'Chat room 2', messageList: [2]},
        3: {title: '', messageList: []}
    }
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {
                    user: action.sender, text: action.text
                } } }
            })
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
                return update(store, {
                    chats: { $merge: {
                        [chatId]: {
                            title: action.title, messageList: []
                        }
                    } }
                })
        }
        default: 
            return store;
    }
}