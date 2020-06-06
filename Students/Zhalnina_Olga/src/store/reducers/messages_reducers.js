import update from "react-addons-update";

//import actions
import {
  CLOSE_RESPONDENT,
  SELECT_RESPONDENT,
  SEND_MSG,
} from "../actions/messages_actions.js";
import { SUCCESS_MESSAGES_LOADING } from "../../../../../PR/6/src/store/actions/messages_actions.js";

const initialStore = {
  sender: "Me",
  users: ["Bob", "Alice", "Fill", "Alex"],
  respondent: "",
  messages: {},
};

export default function msgReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MSG: {
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: {
              sender: action.sender,
              text: action.text,
            },
          },
        },
      });
    }
    case SUCCESS_MESSAGES_LOADING: {
      return update(store, {
        messages: { $set: action.payload },
      });
    }

    case SELECT_RESPONDENT: {
      return {
        ...store,
        respondent: action.sender,
      };
    }

    case CLOSE_RESPONDENT: {
      return {
        ...store,
        messages: {
          1: {
            sender: null,
            text: "Выберите чат",
          },
        },
      };
    }

    default:
      return store;
  }
}
