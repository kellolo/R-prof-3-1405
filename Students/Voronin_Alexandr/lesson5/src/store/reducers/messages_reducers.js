import update from 'react-addons-update';
//import actions(methods)
import { SUCCESS_MESSAGES_LOADING } from '../actions/messages_actions.js'
import { SUCCESS_MESSAGE_SEND } from '../actions/messages_actions.js'


let action;         //{type: 'some type'}
const initialStore = {
    messages: {}
    // messages: []
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SUCCESS_MESSAGE_SEND: {
            if (action.payload.response.status) {
                return update(store, {      //update - same Object.assign    
                    messages: {$merge: { [action.payload.msg.messageId]: {user: action.payload.msg.sender, text: action.payload.msg.text} }}                //some act with reducer
                })
            } else {
                console.log('Error send msg', action.payload);
                return null
            }                             
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