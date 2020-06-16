import { SUCCESS_MESSAGE_SEND, sendMessage } from '../store/actions/messages_actions.js';

const answersBot = [
    'I have different answer',
    'What you mean, leather bag?',
    'Ok, gay',
    'SHUT UP!!!',
    'What do you want?'
]

export default store => next => action => {
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND: {
            if (action.payload.msg.sender == 'Me') {
                setTimeout(() => {
                    let id = Object.keys(store.getState().msgReducer.messages).length + 1; //id = `id-${Date.now()}`

                    var rand = Math.floor(Math.random() * answersBot.length);

                    return store.dispatch(
                        sendMessage(id, 'Bot', answersBot[rand])
                    )
                }, 1000)
            }
        }
    }
    return next(action);
};