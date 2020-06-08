import { getJSON, RSAA } from "redux-api-middleware";

export let START_MESSAGES_LOADING = '@@messages/START_MESSAGES_LOADING';
export let SUCCESS_MESSAGES_LOADING = '@@messages/SUCCESS_MESSAGES_LOADING';
export let ERROR_MESSAGES_LOADING = '@@messages/ERROR_MESSAGES_LOADING';

export let START_MESSAGE_SEND = '@@messages/START_MESSAGE_SEND';
export let SUCCESS_MESSAGE_SEND = '@@messages/SUCCESS_MESSAGE_SEND';
export let ERROR_MESSAGE_SEND = '@@messages/ERROR_MESSAGE_SEND';

// export let sendMessage = (messageId, sender, text) => ({
//     type: SEND_MSG,
//     messageId,
//     sender,
//     text
// });

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res)
                            .then(json => json)
            },
            ERROR_MESSAGES_LOADING
        ]
    }
});

export let sendMessage = (messageId, sender, text) => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageId, sender, text }),
        types: [
            START_MESSAGE_SEND,
            {
                type: SUCCESS_MESSAGE_SEND,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, msg: { messageId, sender, text }}))
            },
            ERROR_MESSAGE_SEND
        ]
    }
});