import update from 'react-addons-update';

import { VIEW_PROFILE, SUCCESS_PROFILE_LOADING } from '../actions/profile_actions.js';

const initialStore = {
    profiles: {}
}

export default function profileReducer(store = initialStore, action) {
    switch(action.type) {
        case VIEW_PROFILE: {
            return update(store, {
                profiles: { $merge: { [action.userId]: { userName: action.userName, status: action.status, phone: action.phone } } }
            })
        }
        case SUCCESS_PROFILE_LOADING: {
            return update(store, {
                profiles: { $set: action.payload }
            })
        }        
        default:
            return store;
    }
}