import update from 'react-addons-update';

import { VIEW_PROFILE } from '../actions/profile_actions.js';

const initialStore = {
    profiles: {
        1: {
            userName: 'Vader',
            status: 'Хм...',
            phone: '+7 910 000-11-22'
        }
    }
}

export default function profileReducer(store = initialStore, action) {
    switch(action.type) {
        case VIEW_PROFILE: {
            return update(store, {
                profiles: { $merge: { [action.userId]: { userName: action.userName, status: action.status, phone: action.phone } } }
            })
        }
        default:
            return store;
    }
}