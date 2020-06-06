import update from 'react-addons-update';
import { ADD_CHAT, 
         DELETE_CHAT,
         START_CHATS_LOADING,
         SUCCES_CHATS_LOADING,
         ERROR_CHATS_LOADING
} from '../actions/chats_actions.js';

const initialStore = {
    chats: {},
    sLoading: false
}

export default function chtReducer(store = initialStore, action) {    
    switch (action.type) {
        case ADD_CHAT:       
            return {...store, chats: {...store.chats,  [action.chatId]: { title: action.title, deleted: false, messageList: [] } } }
        case DELETE_CHAT:
            return {...store, chats: {...store.chats, [action.chatId]: {title: store.chats[action.chatId].title, deleted: true, messageList: []} } }
            case START_CHATS_LOADING: {
                return {...store, isLoading: true } }
            case SUCCES_CHATS_LOADING: {
                return {...store, chats: action.payload, isLoading: false } }
            case ERROR_CHATS_LOADING: { 
                return {...store, isLoading: true } }
        default:
            return store;
    }
}