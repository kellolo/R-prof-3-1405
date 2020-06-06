import { getJSON, RSAA } from 'redux-api-middleware'
export let SEND_MSG = '@@messages/SEND';

export let START_MESSAGES_LOADING = '@@messages/START_MESSAGES_LOADING';
export let SUCCESS_MESSAGES_LOADING = '@@messages/SUCCESS_MESSAGES_LOADING';
export let ERROR_MESSAGES_LOADING = '@@messages/ERROR_MESSAGES_LOADING';

export let sendMessage = (messageId, sender, text) => ({
    type: SEND_MSG,
    messageId,
    sender,
    text
});

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: './server/db/messages.json',
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
})