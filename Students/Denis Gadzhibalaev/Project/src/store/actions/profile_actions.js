export let START_SET_NAME = '@@Name/START_SET_NAME';
export let SUCCESS_SET_NAME = '@@Name/SUCCESS_SET_NAME';
export let ERROR_SET_NAME = '@@Name/ERROR_SET_NAME';

export let START_CHANGEINPROFILE_NAME = '@@Name/START_CHANGEINPROFILE_NAME';
export let SUCCESS_CHANGEINPROFILE_NAME = '@@Name/SUCCESS_CHANGEINPROFILE_NAME';
export let ERROR_CHANGEINPROFILE_NAME = '@@Name/ERROR_CHANGEINPROFILE_NAME';

export let START_CHANGEINPROFILE_EMAIL = '@@Name/START_CHANGEINPROFILE_EMAIL';
export let SUCCESS_CHANGEINPROFILE_EMAIL = '@@Name/SUCCESS_CHANGEINPROFILE_EMAIL';
export let ERROR_CHANGEINPROFILE_EMAIL = '@@Name/ERROR_CHANGEINPROFILE_EMAIL';

export const START_USERPROFILE_LOADING = '@@chats/START_USERPROFILE_LOADING';
export const SUCCESS_USERPROFILE_LOADING = '@@chats/SUCCES_USERPROFILE_LOADING';
export const ERROR_USERPROFILE_LOADING = '@@chats/ERROR_USERPROFILE_LOADING';

import { RSAA, getJSON } from 'redux-api-middleware';    


export let SET_EMAIL = '@@email/SET_EMAIL';

export const setUserName = (name, lastName) => ({   
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, lastName }),
        types: [
            START_SET_NAME,
            {
                type: SUCCESS_SET_NAME,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, name, lastName } ) )
            },
            ERROR_SET_NAME
        ]
    } 
});

export const changeUserNameInProfile = (name) => ({   
    [RSAA]: {
        endpoint: '/api/profile',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
        types: [
            START_CHANGEINPROFILE_NAME,
            {
                type: SUCCESS_CHANGEINPROFILE_NAME,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, name } ) )
            },
            ERROR_CHANGEINPROFILE_NAME
        ]
    } 
});

export const changeUserEmailnProfile = (email) => ({   
    [RSAA]: {
        endpoint: '/api/profile',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        types: [
            START_CHANGEINPROFILE_EMAIL,
            {
                type: SUCCESS_CHANGEINPROFILE_EMAIL,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, email } ) )
            },
            ERROR_CHANGEINPROFILE_EMAIL
        ]
    } 
});

export const loadUserProfile = () => ({
    [RSAA]: {
        endpoint: `/api/profile`,
        method: 'GET',
        types: [
            START_USERPROFILE_LOADING,
            {
                type: SUCCESS_USERPROFILE_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json
                ),
            },
            ERROR_USERPROFILE_LOADING
        ]
    }
});

export const setUserEmail = (email) => ({
    type: SET_EMAIL,
    email
})
