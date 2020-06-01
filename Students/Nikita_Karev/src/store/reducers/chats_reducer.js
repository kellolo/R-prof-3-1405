import update from "react-addons-update";

//actions
import { ADD_CHAT } from '../actions/chats_actions.js'; 

let initialStore = {
    chats: {
        1: {
            title: 'John Carmack',
            messagesList: []
        },
        2: {
            title: 'Mick Gordon',
            messagesList: []
        },
        3: {
            title: 'Drew Karpyshyn',
            messagesList: []
        },
        4: { 
            title: 'Neil Druckmann',
            messagesList: []
        }
    }
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            messagesList: []
                        }
                    }
                }
            });
        }
        default:
             return store;
    }
}