import { RSAA, getJSON } from 'redux-api-middleware';


export let START_CHAT_LOADING = '@@chat/START_CHAT_LOADING';
export let SUCCESS_CHAT_LOADING = '@@chat/SUCCESS_CHAT_LOADING';
export let ERROR_CHAT_LOADING = '@@chat/ERROR_CHAT_LOADING';

export let START_CHAT_ADD = '@@chat/START_CHAT_ADD';
export let SUCCESS_CHAT_ADD = '@@chat/SUCCESS_CHAT_ADD';
export let ERROR_CHAT_ADD = '@@chat/ERROR_CHAT_ADD';

export let START_CHAT_DEL = '@@chat/START_CHAT_DEL';
export let SUCCESS_CHAT_DEL = '@@chat/SUCCESS_CHAT_DEL';
export let ERROR_CHAT_DEL = '@@chat/ERROR_CHAT_DEL';

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'GET',
        types: [
            START_CHAT_LOADING,
            {
                type: SUCCESS_CHAT_LOADING,
                payload: (action, state, res) => getJSON(res)
                            .then(json => json)
            },
            ERROR_CHAT_LOADING
        ]
    }
});

export let addChat = (chatId, title, messagesList = []) => ({
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
                            .then(json => ({ response: json, chat: { chatId, title, messagesList } }))
            },
            ERROR_CHAT_ADD
        ]
    }
});

export let delChat = chatId => ({
    type: SUCCESS_CHAT_DEL,
    chatId
});