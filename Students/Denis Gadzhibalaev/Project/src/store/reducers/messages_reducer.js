import { SUCCESS_MESSAGE_SEND, 
         SUCCESS_MESSAGE_DELETE,
         START_MESSAGES_LOADING,
         SUCCESS_MESSAGES_LOADING,
         ERROR_MESSAGES_LOADING
} from '../actions/messages_actions.js';

const initialStore = {
    messages: {},
    isLoading: false,
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND: 
        if (action.payload.response.status) {
            return {...store, messages: {...store.messages,  [action.payload.response._id]: { _id: action.payload.response._id, sender: action.payload.msg.sender, text: action.payload.msg.text, deleted: false, chatId: action.payload.msg.chatId } } }
        } else {
            console.log('Error send msg', action.payload);
            return null
        }
        case SUCCESS_MESSAGE_DELETE:

        if (action.payload.response.status) {
            return {...store, messages: {...store.messages,  [action.payload.msg.messageId]: {...store.messages[action.payload.msg.messageId], deleted: true } } }
        } else {
            console.log('Error delete msg', action.payload);
            return null
        }
        case START_MESSAGES_LOADING: {
            return {...store, isLoading: true } }
        case SUCCESS_MESSAGES_LOADING: {
                return {...store, messages: action.payload, isLoading: false }; 
        } 
        case ERROR_MESSAGES_LOADING: { 
            return {...store, isLoading: true } }
        default:
            return store;
       
    }
}