import { SEND_MSG, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
    switch (action.type) {
        case SEND_MSG: {
            if (action.sender == 'Me') {
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