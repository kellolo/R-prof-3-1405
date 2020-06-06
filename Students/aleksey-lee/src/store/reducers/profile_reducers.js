import { SUCCESS_PROFILE_LOADING } from '../actions/profile_actions.js';
import update from 'react-addons-update';

const initialStore = {
    userInfo: {}
}

export default function profileReducer(store = initialStore, action) {
    switch(action.type) {
        case SUCCESS_PROFILE_LOADING: {
            return update(store, {
                userInfo: { $set: action.payload }
            })
        }
        default:
            return store;
    }
}