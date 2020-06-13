import { SUCCESS_CHAT_ADD,  SUCCESS_CHAT_DELETE, SUCCESS_CHATS_LOADING } from '../actions/chats_actions.js';
import { SUCCESS_MESSAGE_SEND, SUCCESS_MESSAGES_LOADING, SUCCESS_MESSAGE_DELETE } from '../actions/messages_actions.js';

const initialStore = {
    chats: {},
    isLoading: false,
    stopLoadingMsg: false,
    stopLoadinCht: false,
}

export default function chtReducer(store = initialStore, action) {        
    console.log(store)
    switch (action.type) {
        case SUCCESS_CHAT_ADD:     
            if (action.payload.response.status) {
                return {...store, chats: {...store.chats,  [action.payload.cht.chatId]: { title: action.payload.cht.title, deleted: false, messagesList: [] } } };
            }  
        case SUCCESS_CHAT_DELETE:
            if (action.payload.response.status) {
                return {...store, chats: {...store.chats, [action.payload.cht.chatId]: {title: store.chats[action.payload.cht.chatId].title, deleted: true, messagesList: []} } };

            }
            case SUCCESS_MESSAGE_SEND: 
                if (action.payload.response.status) {
                    return {...store, chats: {...store.chats, [action.payload.msg.chatId]: {...store.chats[action.payload.msg.chatId], messagesList: [...store.chats[action.payload.msg.chatId].messagesList, { text:action.payload.msg.text, user:action.payload.msg.sender, messageId: action.payload.msg.messageId } ] } } }
                } else {
                    console.log('Error send msg', action.payload);
                    return null
                }
            case SUCCESS_MESSAGE_DELETE:
                if (action.payload.response.status) {   
                    store.chats[action.payload.msg.chatId].messagesList.splice(action.payload.msg.msgIndexInMessageList, 1) 
                    return {...store};     
                } else {
                    console.log('Error delete msg', action.payload);
                    return null
                }
            case SUCCESS_CHATS_LOADING:
                if (!store.stopLoadingCht) {
                return {...store, chats: action.payload, isLoading: false, stopLoadingCht: true };
                }
            case SUCCESS_MESSAGES_LOADING: {
                if (!store.stopLoadingMsg) {
                    const chats = {...store.chats};
                Object.values(action.payload).forEach((msg, i) => {
                    const { user, text, chatId, deleted } = msg;
                    if (!deleted) {
                        chats[chatId].messagesList.push({
                        user: user,
                        text: text,
                        messageId: i + 1
                    });
                    }
                });
                return  {...store , stopLoadingMsg: true};
                }   
            }
        default:
            return store;
    }
}