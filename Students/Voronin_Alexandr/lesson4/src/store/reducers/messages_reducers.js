import update from 'react-addons-update';
//import actions(methods)
import { SEND_MSG } from '../actions/messages_actions.js'


let action;         //{type: 'some type'}
const initialStore = {
    messages: {
        1: {
            user: 'Me',
            text: 'Hi'
        },
        2: {
            user: null,
            text: 'Hello'
        },
        3: {
            user: 'Me',
            text: 'How are you?'
        },
        4: {
            user: null,
            text: 'Fine'
        }
    }
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MSG: {
            return update(store, {      //update - same Object.assign    
                messages: {$merge: { [action.messageId]: {user: action.sender, text: action.text} }}                //some act with reducer
            })                               
        }
        default:
            return store;
    }
}