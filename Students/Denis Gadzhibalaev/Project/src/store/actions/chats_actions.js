import { RSAA, getJSON } from 'redux-api-middleware';    

export let ADD_CHAT = '@@chat/ADD_CHAT';
export let DELETE_CHAT = '@@chat/DELETE_CHAT';

export const START_CHATS_LOADING = '@@messade/START_CHATS_LOADING';
export const SUCCES_CHATS_LOADING = '@@messade/SUCCES_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@messade/ERROR_CHATS_LOADING';

export let addChat = (chatId, title ) => ({
    type: ADD_CHAT,
    chatId,
    title
});

export let deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId
});

export const loadChats = () => ({
    [RSAA]: {
        endpoint: './server/db/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCES_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json
                )
            },
            ERROR_CHATS_LOADING
        ]
    }
});