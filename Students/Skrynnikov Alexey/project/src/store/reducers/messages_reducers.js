import update from 'react-addons-update';

import { SUCCESS_MESSAGES_LOADING } from '../actions/messages_actions.js'; 
import { SUCCESS_MESSAGE_SEND } from '../actions/messages_actions.js';

const initialStore = {
    messages: {}
};

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SUCCESS_MESSAGE_SEND: {
                return update(store, {
                    messages: { $merge: { [action.payload.msg.messageId]: { sender: action.payload.msg.sender, text: action.payload.msg.text } } }
                });
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