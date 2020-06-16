import update from 'react-addons-update';
import { SEND_MSG } from '../actions/messages_actions.js';
const inintialStore = {
    messages: {
        1:{
            user: 'Luntik',
            text: 'Hi'
        },
        2:{
            user: null,
            text: 'Hello'
        },
        3:{
            user: 'Luntik',
            text: 'How are you'
        },
        4:{
            user: null,
            text: 'Fine'
        },
    }
}

export default function msgReduser(store = inintialStore, action) {
    switch(action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: { $merge: { [action.messageId]: { user: action.sender, text: action.text } } }
            })
        }
        default:
            return store;
    }
}