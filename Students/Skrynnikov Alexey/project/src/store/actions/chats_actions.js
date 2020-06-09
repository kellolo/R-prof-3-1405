import { RSAA, getJSON } from "redux-api-middleware";

export let START_CHATS_LOADING = '@@chat/START_CHATS_LOADING';
export let SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING';
export let ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING';

export let START_CHAT_ADD = '@@messages/START_CHAT_ADD';
export let SUCCESS_CHAT_ADD = '@@messages/SUCCESS_CHAT_ADD';
export let ERROR_CHAT_ADD = '@@messages/ERROR_CHAT_ADD';

export let addChat = title => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
        types: [
            START_CHAT_ADD,
            {
                type: SUCCESS_CHAT_ADD,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, title}))
            },
            ERROR_CHAT_ADD
        ]
    }
});

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res)
                            .then(json => json)
            },
            ERROR_CHATS_LOADING
        ]
    }
});