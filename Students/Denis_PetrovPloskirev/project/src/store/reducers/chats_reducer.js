import update from "react-addons-update";

import {SUCCESS_CHATS_LOADING, SUCCESS_CHAT_DELETING, SUCCESS_CHAT_ADDING} from '../actions/chats_actions.js';

let initialStore = {
  chats: {}
}

export default function chatsReducer(store = initialStore, action) {
  switch (action.type) {
    case SUCCESS_CHATS_LOADING: {
      let dto = action.payload;
      let chats = {}
      dto.forEach(d => {
        chats[d._id] = { title: d.title}
      });
      return update(store, {
        chats: { $set: chats }
      });
    }
    case SUCCESS_CHAT_ADDING: {
      let chatId = action.payload.response._id;
      let title = action.payload.title;
      return update(store, {
        chats: {
          $merge: {
            [chatId]: { title }
          }
        }
      });
    }
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
    default:
      return store;
  }
}
