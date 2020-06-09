import { SUCCESS_MESSAGE_SEND, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND: {  
            if (action.payload.msg.sender ==  store.getState().prfReducer.userName) {
                setTimeout(() => {
                    let id = Object.keys(store.getState().msgReducer.messages).length + 1;
                    let chatId = Object.values(store.getState().msgReducer.messages)[Object.keys(store.getState().msgReducer.messages).length - 1].chatId
                    return store.dispatch(
                        sendMessage(id, null, '', chatId)
                    )
                }, 1000)
            }
        }
    }
    return next(action);
};