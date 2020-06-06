import update from 'react-addons-update';
//import actions(methods)
import { SEND_MSG, SUCCESS_MESSAGES_LOADING } from '../actions/messages_actions.js'


let action;         //{type: 'some type'}
const initialStore = {
    messages: {}
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MSG: {
            return update(store, {      //update - same Object.assign    
                messages: {$merge: { [action.messageId]: {user: action.sender, text: action.text} }}                //some act with reducer
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