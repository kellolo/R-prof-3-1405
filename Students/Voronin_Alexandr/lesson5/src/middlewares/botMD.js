import { SUCCESS_MESSAGE_SEND, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND: {
            if (action.payload.msg.sender) {
                setTimeout (() => {
                    let id = Object.keys(store.getState().msgReducer.messages).length + 1;
                    return store.dispatch(
                        sendMessage(id, 'Bot', 'Купи слона')
                    )
                }, 1000)
            }
        }
    }
    return next(action);
}