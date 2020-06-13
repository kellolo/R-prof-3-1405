import { SUCCESS_MESSAGE_SEND, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
  switch (action.type) {
    case SUCCESS_MESSAGE_SEND: {
      if (action.payload.msg.sender == store.getState().prflReducer.user) {
        console.log('entered');
        setTimeout(() => {
          let text = 'Bot answer...';
          return store.dispatch(
            sendMessage(action.payload.msg.chatId, null, text)
          )
        }, 1000);
      }
    }
  }
  return next(action);
};
