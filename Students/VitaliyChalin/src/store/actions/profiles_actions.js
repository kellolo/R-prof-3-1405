export let ADD_PROFILE = '@@profile/ADD_PROFILE';

export let addProfile = (chatId, userName, avatar = 'https://via.placeholder.com/128', bio) => ({
    type: ADD_PROFILE,
    chatId,
    userName,
    avatar,
    bio
});