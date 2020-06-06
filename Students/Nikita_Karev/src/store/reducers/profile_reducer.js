import {SET_NAME} from '../actions/profile_actions.js';


const initialStore = {
  user: 'John Carmack'
}

export default function profileReducer(store = initialStore, action) {
  switch (action.type) {
    case SET_NAME: 
      return {...store, user: action.name};
    default:
      return store;
  }
}