import update from 'react-addons-update';

import { SEND_MSG } from '../actions/messages_actions.js';

const initialStore = {
    messages: {
        1: {
            user: 'Vader',
            text: 'Привет'
        },
        2: {
            user: null,
            text: 'Привет!'
        },
        3: {
            user: 'Vader',
            text: 'Как дела?'
        },
        4: {
            user: null,
            text: 'Нормально!'
        }
    }
}

export default function messageReducer(store = initialStore, action) {
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