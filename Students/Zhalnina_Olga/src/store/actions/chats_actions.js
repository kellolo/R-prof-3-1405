export let ADD_CHAT = '@@chat/ADD_CHAT';

export let addChat = title => ({
  type: ADD_CHAT,
  title
});