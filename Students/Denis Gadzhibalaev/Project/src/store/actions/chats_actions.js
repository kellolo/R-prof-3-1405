import { RSAA, getJSON } from 'redux-api-middleware';    

export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCES_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chats/ERROR_CHATS_LOADING';

export const START_CHAT_ADD = '@@chats/START_CHATS_ADD';
export const SUCCESS_CHAT_ADD = '@@chats/SUCCES_CHATS_ADD';
export const ERROR_CHAT_ADD = '@@chats/ERROR_CHATS_ADD';

export const START_CHAT_DELETE = '@@messages/START_CHAT_DELETE';
export const SUCCESS_CHAT_DELETE = '@@messages/SUCCESS_CHAT_DELETE';
export const ERROR_CHAT_DELETE = '@@messages/ERROR_CHAT_DELETE';

export let ADD_CHAT = '@@chat/ADD_CHAT';
export let DELETE_CHAT = '@@chat/DELETE_CHAT';


export let addChat = (chatId, title) => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatId, title }),
        types: [
            START_CHAT_ADD,
            {
                type: SUCCESS_CHAT_ADD,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, cht: { chatId, title } } ) )
            },
            ERROR_CHAT_ADD
        ]
    }
});

export let deleteChat = (chatId) => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatId }),
        types: [
            START_CHAT_DELETE,
            {
                type: SUCCESS_CHAT_DELETE,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, cht: { chatId } } ) )
            },
            ERROR_CHAT_DELETE
        ]
    }
});

// export let deleteChat = (chatId) => ({
//     type: DELETE_CHAT,
//     chatId
// });

export const loadchats = (chatId) => ({
    chatId,
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json
                ),
            },
            ERROR_CHATS_LOADING
        ]
    }
});

