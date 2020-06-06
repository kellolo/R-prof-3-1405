import { RSAA, getJSON } from 'redux-api-middleware';    

export let SEND_MSG = '@@messages/SEND_MESSAGE';
export let DELETE_MESSAGE = '@@chat/DELETE_MESSAGE';

export const START_MESSAGES_LOADING = '@@messade/START_MESSAGES_LOADING';
export const SUCCES_MESSAGES_LOADING = '@@messade/SUCCES_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@messade/ERROR_MESSAGES_LOADING';

export let sendMessage = (messageId, sender, text) => ({
    type: SEND_MSG,
    messageId,
    sender,
    text,
})

export let deleteMessage = (messageId) => ({
    type: DELETE_MESSAGE,
    messageId
});

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: './server/db/messages.json',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCES_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json
                )
            },
            ERROR_MESSAGES_LOADING
        ]
    }
});