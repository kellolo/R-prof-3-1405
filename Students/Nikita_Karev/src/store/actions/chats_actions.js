import { RSAA, getJSON } from 'redux-api-middleware';

export let ADD_CHAT = '@@chat/ADD_CHAT';

export let START_CHAT_CREATE = '@@messages/START_CHAT_CREATE';
export let SUCCESS_CHAT_CREATE = '@@messages/SUCCESS_CHAT_CREATE';
export let ERROR_CHAT_CREATE = '@@messages/ERROR_CHAT_CREATE';

export let START_CHATS_LOADING = '@@messages/START_CHATS_LOADING';
export let SUCCESS_CHATS_LOADING = '@@messages/SUCCESS_CHATS_LOADING';
export let ERROR_CHATS_LOADING = '@@messages/ERROR_CHATS_LOADING';

export let addChat = title => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
        types: [
            START_CHAT_CREATE,
            {
                type: SUCCESS_CHAT_CREATE,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, title }))
            },
            ERROR_CHAT_CREATE    
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