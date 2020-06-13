import { getJSON, RSAA } from "redux-api-middleware";

export let START_PROFILE_LOADING = '@@messages/START_PROFILE_LOADING';
export let SUCCESS_PROFILE_LOADING = '@@messages/SUCCESS_PROFILE_LOADING';
export let ERROR_PROFILE_LOADING = '@@messages/ERROR_PROFILE_LOADING';

export const loadProfile = () => ({
    [RSAA]: {
        endpoint: './api/profiles',
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