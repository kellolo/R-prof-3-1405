import { SEND_MSG, sendMessage } from "../store/actions/messages_actions.js";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MSG: {
      if (action.sender == "Me") {
        setTimeout(() => {
          let id = Object.keys(store.getState().msgReducer.messages).length + 1; //id = `id-${Date.now()}`
          return store.dispatch(sendMessage(id, "Bot", "Some text..."));
        }, 1000);
      }
    }
  }
  return next(action);
};
