import { getJSON, RSAA } from "redux-api-middleware";

export let START_CHATS_LOADING = '@@messages/START_CHATS_LOADING';
export let SUCCESS_CHATS_LOADING = '@@messages/SUCCESS_CHATS_LOADING';
export let ERROR_CHATS_LOADING = '@@messages/ERROR_CHATS_LOADING';

export let START_CHAT_ADD = '@@messages/START_CHAT_ADD';
export let SUCCESS_CHAT_ADD = '@@messages/SUCCESS_CHAT_ADD';
export let ERROR_CHAT_ADD = '@@messages/ERROR_CHAT_ADD';

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'GET',
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

export let addChat = (chatId, title, messagesList) => ({

    [RSAA]: {
        endpoint: '/api/chats',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatId, title, messagesList }),
        types: [
            START_CHAT_ADD,
            {
                type: SUCCESS_CHAT_ADD,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, chat: { chatId, title, messagesList }}))
            },
            ERROR_CHAT_ADD
        ]
    }
});