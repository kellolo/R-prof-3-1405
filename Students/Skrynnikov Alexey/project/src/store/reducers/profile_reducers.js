import {SET_NAME} from '../actions/profile_actions.js';


const initialStore = {
  user: ''
}

export default function profReducer(store = initialStore, action) {
  switch (action.type) {
    case SET_NAME: 
      return {...store, user: action.name};
    default:
      return store;
  }
}