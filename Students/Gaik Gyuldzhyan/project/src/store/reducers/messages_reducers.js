import update from 'react-addons-update';

//import actions
import {
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING
} from '../actions/messages_actions.js';

import { SUCCESS_MESSAGE_SEND } from '../actions/messages_actions.js';


const initialStore = {
    messages: {},
    isLoading: false,
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND:
            {
                if (action.payload.response.status) {
                    return update(store, {
                        messages: {
                            $merge: {
                                [action.payload.msg.messageId]: { user: action.payload.msg.sender, text: action.payload.msg.text }
                            }
                        }
                    })
                } else {
                    console.log('Error send msg', action.payload);
                    return null
                }
            }
        case START_MESSAGES_LOADING:
            {
                return update(store, {
                    isLoading: { $set: true },
                });
            }
        case SUCCESS_MESSAGES_LOADING:
            {
                return update(store, {
                    messages: { $set: action.payload },
                    isLoading: { $set: false }
                })
            }
        case ERROR_MESSAGES_LOADING:
            {
                return update(store, {
                    isLoading: { $set: false },
                })
            }
        default:
            return store;
    }
}