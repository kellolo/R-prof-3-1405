import { combineReducers } from 'redux';
import msgReducer from './messages_reducers.js';
import chatsReducer from './chats_reducer.js';
import profileReducer from './profile_reducer.js';

export default combineReducers({ msgReducer, chatsReducer, profileReducer })