import { combineReducers } from 'redux'
import msgReducer from './messages_reducers';
import chatsReducer from './chats_reducers';

export default combineReducers({ msgReducer, chatsReducer })