export let ADD_CHAT = '@@chat/ADD_CHAT';

import { getJSON, RSAA } from 'redux-api-middleware'

export const START_CHAT_CREATE = '@@chat/START_CHAT_CREATE';
export const SUCCESS_CHAT_CREATE = '@@chat/SUCCESS_CHAT_CREATE';
export const ERROR_CHAT_CREATE = '@@chat/ERROR_CHAT_CREATE';
export const START_CHAT_LOADING = '@@chat/START_CHAT_LOADING';
export const SUCCESS_CHAT_LOADING = '@@chat/SUCCESS_CHAT_LOADING';
export const ERROR_CHAT_LOADING = '@@chat/ERROR_CHAT_LOADING';

export let addChat = title => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( { title } ),
        types: [
            ERROR_CHAT_CREATE,
            {
                type: SUCCESS_CHAT_CREATE,
                payload: (action, state, res) => getJSON(res)
                    .then(json => ({response: json, title}))
            },
            ERROR_CHAT_CREATE
        ]
    }
});

export let loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
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

//export let addChat = title => ({
//    type: ADD_CHAT,
//    title
//})