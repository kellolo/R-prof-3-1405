import { getJSON, RSAA } from 'redux-api-middleware';

export const ADD_CHAT ='@@chat/ADD_CHAT';

export let START_CHATS_LOADING = '@@messages/START_CHATS_LOAING';
export let SUCCESS_CHATS_LOADING = '@@messages/SUCCESS_CHATS_LOAING';
export let ERROR_CHATS_LOADING = '@@messages/ERROR_CHATS_LOAING';

export let START_CHAT_ADDING = '@@messages/START_CHAT_ADDING';
export let SUCCESS_CHAT_ADDING = '@@messages/SUCCESS_CHAT_ADDING';
export let ERROR_CHAT_ADDING = '@@messages/ERROR_CHAT_ADDING';


export const loadChats = () => ({
    [RSAA]: {
        endpoint: `/api/chats`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
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

export let addChat = (title) => ({
    [RSAA]: {
      endpoint: '/api/chats',
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({ title }),
      types: [
        START_CHAT_ADDING,
        {
          type: SUCCESS_CHAT_ADDING,
          payload: (action, state, res) => getJSON(res).then(json => ({ response: json, title}))
        },
        ERROR_CHAT_ADDING
      ]
    }
  });