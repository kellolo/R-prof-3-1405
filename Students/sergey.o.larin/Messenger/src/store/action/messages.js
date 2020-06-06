import { getJSON, RSAA } from "redux-api-middleware";

export let START_MESSAGES_LOADING = '@@messages/START_MESSAGES_LOADING';
export let SUCCESS_MESSAGES_LOADING = '@@messages/SUCCESS_MESSAGES_LOADING';
export let ERROR_MESSAGES_LOADING = '@@messages/ERROR_MESSAGES_LOADING';

export let SEND_MESSAGE = '@@messages/SEND';
export let NEW_STORY_LINE = '@@messages/NEW_STORY_LINE'

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
});

export let sendMessage = (id, messageId, sender, text) => ({
    type: SEND_MESSAGE,
    id,
    messageId,
    sender,
    text
});

export let newStoryLine = (id, messageId, sender, text) => ({
    type: NEW_STORY_LINE,
    id,
    messageId,
    text,
})