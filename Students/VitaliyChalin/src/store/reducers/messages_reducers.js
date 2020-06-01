import update from 'react-addons-update';

// import actions
import { SEND_MSG } from '../actions/messages_actions.js';

const initialStore ={
    
    messages: {
        1: {
                user: 'Me',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ratione'
            },
        2: {
                user: null,
                text: 'Lorem ipsum dolor sit amet'
            },
        3: {
                user: 'Me',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, voluptatum quasi?'
            },
        4: {
                user: null,
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit'
            }
    },
}



export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: { $merge: { [action.messageId]: { user: action.sender, text: action.text, chatId: action.chatId } } }
            })
        }
        default:
            return store;
    }
}