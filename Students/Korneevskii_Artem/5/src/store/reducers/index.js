import { combineReducers } from 'redux';
import messageReducer from './messages_reducers.js';
import chatsReducer from './chats_reducers.js';
import profileReducer from './profile_reducers.js';

export default combineReducers({ messageReducer, chatsReducer, profileReducer })