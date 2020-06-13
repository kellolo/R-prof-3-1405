import { RSAA, getJSON } from 'redux-api-middleware';

export let ADD_PROFILE = '@@profile/ADD_PROFILE';

export let START_PROFILE_LOADING = '@@profile/START_PROFILE_LOADING';
export let SUCCESS_PROFILE_LOADING = '@@profile/SUCCESS_PROFILE_LOADING';
export let ERROR_PROFILE_LOADING = '@@profile/ERROR_PROFILE_LOADING';

export let addProfile = (chatId, userName, avatar = 'https://via.placeholder.com/128', bio) => ({
    type: ADD_PROFILE,
    chatId,
    userName,
    avatar,
    bio
});

export const loadProfiles = () => ({
    [RSAA]: {
        endpoint: './server/db/json/profiles.json',
        method: 'GET',
        types: [
            START_PROFILE_LOADING,
            {
                type: SUCCESS_PROFILE_LOADING,
                payload: (action, state, res) => getJSON(res)
                            .then(json => json)
            },
            ERROR_PROFILE_LOADING
        ]
    }
});