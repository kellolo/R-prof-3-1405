import { SUCCESS_CHAT_ADD,  SUCCESS_CHAT_DELETE, SUCCESS_CHATS_LOADING } from '../actions/chats_actions.js';

const initialStore = {
    chats: {},
    isLoading: false,
}

export default function chtReducer(store = initialStore, action) {       
    switch (action.type) {
        case SUCCESS_CHAT_ADD:     
            if (action.payload.response.status) {
                return {...store, chats: {...store.chats,  [action.payload.response._id]: { _id: action.payload.response._id, title: action.payload.cht.title, deleted: false, messagesList: [] } } };
            }  
        case SUCCESS_CHAT_DELETE:
            if (action.payload.response.status) {
                return {...store, chats: {...store.chats, [action.payload.cht.chatId]: {title: store.chats[action.payload.cht.chatId].title, deleted: true, messagesList: []} } };

            }
            case SUCCESS_CHATS_LOADING:
                return {...store, chats: action.payload, isLoading: false};
    
        default:
            return store;
    }
}