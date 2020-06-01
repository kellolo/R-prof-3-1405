
import { SET_NAME } from '../actions/profile_actions.js';
import { SET_EMAIL } from '../actions/profile_actions.js'

const initialStore = {
    userName: 'User1',
    userEmail: 'User1@mail.ru'
}

export default function prfReducer(store = initialStore, action) {
    switch(action.type) {
        case SET_NAME:
            return {...store, userName: action.name}
        case SET_EMAIL:
            return {...store, userEmail: action.email}
    default:
        return store;
    }

}