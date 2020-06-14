 
import { SUCCESS_CHANGEINPROFILE_NAME, SUCCESS_USERPROFILE_LOADING } from '../actions/profile_actions.js';
import { SUCCESS_CHANGEINPROFILE_EMAIL } from '../actions/profile_actions.js'

const initialStore = {}

export default function prfReducer(store = initialStore, action) {
    console.log(store)
    switch(action.type) {
        case SUCCESS_CHANGEINPROFILE_NAME:
            if (action.payload.response.status) {
                return {...store, userName: action.payload.name}
            }    
        case SUCCESS_CHANGEINPROFILE_EMAIL:

            if (action.payload.response.status) {
                 return {...store, userEmail: action.payload.email}
            }
           
        case SUCCESS_USERPROFILE_LOADING:
            return {...store, userName: action.payload.userName, userEmail: action.payload.userEmail}
    default:
        return store;
    }

}