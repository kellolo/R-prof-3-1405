import { combineReducers } from 'redux';
import msgReducer from './messages_reducers.js';
import chatsReducer from './chats_reducer.js';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ router: connectRouter(history), msgReducer, chatsReducer })