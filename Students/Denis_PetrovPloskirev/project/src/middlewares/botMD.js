import { SEND_MSG, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
  switch (action.type) {
    case SEND_MSG: {
      if (action.sender == store.getState().prflReducer.user) {
        setTimeout(() => {
          let id = `id${Date.now()}`
          return store.dispatch(
            sendMessage(id, null, 'Some text...')
          )
        }, 1000)
      }
    }
  }
  return next(action);
};
