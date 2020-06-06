import update from "react-addons-update";

import {ADD_CHAT, DEL_CHAT, SUCCESS_CHATS_LOADING} from '../actions/chats_actions.js';

let initialStore = {
  chats: {
    1: {
      title: 'Mark Zuckerberg',
      messagesList: []
    },
    2: {
      title: 'John Doe',
      messagesList: []
    },
    3: {
      title: 'Bill Gates',
      messagesList: []
    }
  }
}

export default function chatsReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      let chatId = Object.keys(store.chats).length + 1;
      // let chatId = Date.now();

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
    };
    case DEL_CHAT: {
      let chatId = action.id;
      let newStore = {chats: {}};
      for (let key in store.chats) {
        if (key != chatId) {
          newStore = update(newStore, {
            chats: {
              $merge: {
                [key]: {
                  title: store.chats[key].title,
                  messagesList: []
                }
              }
            }
          });
        }
      }
      return newStore;
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
