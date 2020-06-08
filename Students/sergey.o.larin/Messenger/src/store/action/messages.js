import { getJSON, RSAA } from "redux-api-middleware";

export let START_MESSAGES_LOADING = '@@messages/START_MESSAGES_LOADING';
export let SUCCESS_MESSAGES_LOADING = '@@messages/SUCCESS_MESSAGES_LOADING';
export let ERROR_MESSAGES_LOADING = '@@messages/ERROR_MESSAGES_LOADING';

export let START_NEW_STORY_LINE = '@@messages/START_NEW_STORY_LINE';
export let SUCCESS_NEW_STORY_LINE = '@@messages/SUCCESS_NEW_STORY_LINE';
export let ERROR_NEW_STORY_LINE = '@@messages/ERROR_NEW_STORY_LINE';

export let START_MESSAGE_SEND = '@@messages/START_MESSAGE_SEND';
export let SUCCESS_MESSAGE_SEND = '@@messages/SUCCESS_MESSAGE_SEND';
export let ERROR_MESSAGE_SEND = '@@messages/ERROR_MESSAGE_SEND';

export let NEW_STORY_LINE = '@@messages/NEW_STORY_LINE'

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

export let newStoryLineState = (id, messageId, sender, text) => ({
    type: NEW_STORY_LINE,
    id,
    messageId,
    sender,
    text,
})

export let newStoryLine = (id, messageId, sender, text) => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, messageId, sender, text }),
        types: [
            START_NEW_STORY_LINE,
            {
                type: SUCCESS_NEW_STORY_LINE,
                payload: (action, state, res) => getJSON(res)
                    .then(json => ({ response: json, msg: { id, messageId, sender, text } }))
            },
            ERROR_NEW_STORY_LINE
        ]
    }
});

export const sendMessage = (id, messageId, sender, text) => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, messageId, sender, text }),
        types: [
            START_MESSAGE_SEND,
            {
                type: SUCCESS_MESSAGE_SEND,
                payload: (action, state, res) => getJSON(res)
                    .then(json => ({ response: json, msg: { id, messageId, sender, text }}))
            },
            ERROR_MESSAGE_SEND
        ]
    }
});