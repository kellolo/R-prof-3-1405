import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import msgReducer from './messages_reducers.js';
import chatsReducer from './chats_reducer.js';
import profileReducer from './profiles_reducer.js';

export default (history) => combineReducers({
    router: connectRouter(history),
    msgReducer,
    chatsReducer,
    profileReducer
});