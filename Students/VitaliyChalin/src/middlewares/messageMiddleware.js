import { SUCCESS_MESSAGE_SEND, sendMessage } from "../store/actions/messages_actions.js";

export default store => next => (action) => {
    
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND: {

            if (action.payload.msg.sender === 'Me') {
                setTimeout(
                    () => store.dispatch(
                        sendMessage(
                            Object.keys(store.getState().msgReducer.messages).length + 1,
                            'Bot',
                            'Не приставай ко мне, я робот!',
                            action.payload.msg.chatId
                        )
                    )
                , 1000)
            }
        }
    }
    return next(action);
}
