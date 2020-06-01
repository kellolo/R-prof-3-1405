export let ADD_CHAT = '@@chat/ADD_CHAT';
export let DEL_CHAT = '@@chat/DEL_CHAT';

export let addChat = title => ({
  type: ADD_CHAT,
  title
});

export let deleteChat = id => ({
  type: DEL_CHAT,
  id
})