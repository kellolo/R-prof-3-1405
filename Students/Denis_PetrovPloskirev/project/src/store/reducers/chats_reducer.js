import update from "react-addons-update";

import {SUCCESS_CHATS_LOADING, SUCCESS_CHAT_DELETING, SUCCESS_CHAT_ADDING} from '../actions/chats_actions.js';

let initialStore = {
  chats: {}
}

export default function chatsReducer(store = initialStore, action) {
  switch (action.type) {
    case SUCCESS_CHAT_ADDING: {
      if (action.payload.response.status) {
        return update(store, {
          chats: { $merge: { [action.payload.chat.chatId]: { title: action.payload.chat.title, messageList: [] }}}
        })
      } else {
        console.log('Error send msg', action.payload);
        return null;
      }
    };
    case SUCCESS_CHAT_DELETING: {
      if (action.payload.response.status) {
        let chatId = action.payload.chat.chatId
        let newStore = JSON.parse(JSON.stringify(store));
        delete newStore.chats[chatId];

        // с использованием Object.keys и filter
        // let newStore = {chats: {}};
        // Object.keys(store.chats).filter(key => key != chatId).forEach(el => {
        // newStore.chats[el] = store.chats[el]

        return newStore;
      } else {
        return null;
      }
    }
    case SUCCESS_CHATS_LOADING: {
      return update(store, {
        chats: {
          $set: action.payload
        }
      });
    }
    default:
      return store;
  }
}
