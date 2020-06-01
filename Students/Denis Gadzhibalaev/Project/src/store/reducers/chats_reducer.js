import { ADD_CHAT } from '../actions/chats_actions.js';

const initialStore = {
    chats: {
        1: {
            title: 'Chat1',
            messagesList: []
        },
        2: {
            title: 'Chat2',
            messagesList: []
        },
        3: {
            title: 'Chat3',
            messagesList: []
        }
    }
}

export default function chtReducer(store = initialStore, action) {     
    console.log(store)
    switch (action.type) {
        case ADD_CHAT:       
            return {...store, chats: {...store.chats,  [action.chatId]: { title: action.title, messageList: [] } } }
        default:
            return store;
    }
}