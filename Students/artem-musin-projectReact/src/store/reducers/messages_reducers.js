import update from 'react-addons-update';

// import actions 

import { SUCCESS_MESSAGES_LOADING, START_MESSAGES_LOADING, SUCCESS_MESSAGE_SEND } from '../actions/messages_actions.js';

const initialStore = {
    messages: [],
    isLoading: false
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SUCCESS_MESSAGE_SEND: {
            if (action.payload.response.status) {
                return update(store, {
                    messages: { $merge: { [action.payload.msg.messageId]: {
                        user: action.payload.msg.sender, text: action.payload.msg.text
                    } } }
                })
            } else {
                console.log('Error send msg', action.payload)
                return null
            }
        }
        case START_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: true }
            })
        }
        case SUCCESS_MESSAGES_LOADING: {
            return update(store, {
                messages: { $set: action.payload }
            })
        }
        default: 
            return store;
    }
}