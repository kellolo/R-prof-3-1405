//import actions

import { SEND_MSG } from '../actions/messages_actions.js';

const initialStore = {
    messages: {
        1: {
            user: null,
            text: 'Welcome Friend!'
        }
    }
}

export default function msgReducer(store = initialStore, action) {     
    switch (action.type) {
        case SEND_MSG: 
            return {...store, messages: {...store.messages,  [action.messageId]: { user: action.sender, text: action.text } } }
        default:
            return store;
    }
}