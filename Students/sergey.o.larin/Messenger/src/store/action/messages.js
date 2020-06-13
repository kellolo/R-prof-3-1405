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

export let newStoryLine = (userId, respondentId, sender, text) => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, respondentId, sender, text }),
        types: [
            START_NEW_STORY_LINE,
            {
                type: SUCCESS_NEW_STORY_LINE,
                payload: (action, state, res) => getJSON(res)
                    .then(json => ({ response: json, msg: { userId, respondentId, sender, text } }))
            },
            ERROR_NEW_STORY_LINE
        ]
    }
});

export const sendMessage = (userId, respondentId, sender, text) => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, respondentId, sender, text }),
        types: [
            START_MESSAGE_SEND,
            {
                type: SUCCESS_MESSAGE_SEND,
                payload: (action, state, res) => getJSON(res)
                    .then(json => ({ response: json, msg: { userId, respondentId, sender, text } }))
            },
            ERROR_MESSAGE_SEND
        ]
    }
});