import { SEND_MSG, 
         DELETE_MESSAGE,
         START_MESSAGES_LOADING,
         SUCCES_MESSAGES_LOADING,
         ERROR_MESSAGES_LOADING
} from '../actions/messages_actions.js';

const initialStore = {
    messages: {},
    isLoading: false
}

export default function msgReducer(store = initialStore, action) {     
    switch (action.type) {
        case SEND_MSG: 
            return {...store, messages: {...store.messages,  [action.messageId]: { user: action.sender, text: action.text, deleted: false } } }
        case DELETE_MESSAGE:
            return {...store, messages: {...store.messages,  [action.messageId]: { user: store.messages[action.messageId].user, text: store.messages[action.messageId].text, deleted: true } } }
        case START_MESSAGES_LOADING: {
            return {...store, isLoading: true } }
        case SUCCES_MESSAGES_LOADING: {
            return {...store, messages: action.payload, isLoading: false } }
        case ERROR_MESSAGES_LOADING: { 
            return {...store, isLoading: true } }
        default:
            return store;
       
    }
}