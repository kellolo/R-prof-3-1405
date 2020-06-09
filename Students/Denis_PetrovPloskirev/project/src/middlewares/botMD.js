import { SUCCESS_MESSAGE_SEND, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
  switch (action.type) {
    case SUCCESS_MESSAGE_SEND: {
      if (action.payload.msg.sender == store.getState().prflReducer.user) {
        console.log('entered');
        setTimeout(() => {
          let id = `id${Date.now()}`;
          let text = 'Some text';
          return store.dispatch(
            sendMessage(id, null, text)
          )
        }, 1000);
      }
    }
  }
  return next(action);
};
