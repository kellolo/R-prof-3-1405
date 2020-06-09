import update from 'react-addons-update';

//import actions
import { SUCCES_MESSAGES_LOADING, SUCCES_MESSAGE_SEND } from '../actions/messages_actions.js';

const initialStore = {
    messages: {}
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SUCCES_MESSAGE_SEND: {
            if (action.payload.statys) {           
                return update(store, {
                    messages: { $merge: { [action.payload.msg.messageId]: { user: action.payload.msg.sender, text: action.payload.msg.text } } }
                })
            } else {
                console.log('Error send msq', action.payload);
                return                
            }
        }
        case SUCCES_MESSAGES_LOADING: {
            return update(store, {
                messages: { $set: action.payload }
            })
        }
        default:
            return store;
    }
}