import { SUCCESS_MESSAGE_SEND } from '../store/actions/messages_actions.js';

export default store => next => action => {
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND: {
            if (action.payload.msg.sender == 'Me') {
                console.log('go')
                return store.dispatch(
                    (store.getState().chatsReducer.chats[0].messagesList).push(
                        Object.keys(store.getState().msgReducer.messages)
                    )
                )
            }
            // Object.keys(store.getState().chatsReducer.chats[action.payload.chatId]).title
        }
    }
    return next(action)
}