import { getJSON, RSAA } from 'redux-api-middleware';

export let ADD_CHAT = '@@chat/ADD_CHAT';
export let DEL_CHAT = '@@chat/DEL_CHAT';

export let START_CHATS_LOADING = '@@messages/START_CHATS_LOAING';
export let SUCCESS_CHATS_LOADING = '@@messages/SUCCESS_CHATS_LOAING';
export let ERROR_CHATS_LOADING = '@@messages/ERROR_CHATS_LOAING';

export const addChat = title => ({
  type: ADD_CHAT,
  title
});

export const deleteChat = id => ({
  type: DEL_CHAT,
  id
})

export const loadChats = () => ({
  [RSAA]: {
    endpoint: './server/db/chats.json',
    method: 'GET',
    types: [
      START_CHATS_LOADING,
      {
        type: SUCCESS_CHATS_LOADING,
        payload: (action, state, res) => getJSON(res).then(json => json)
      },
      ERROR_CHATS_LOADING
    ]
  }
})