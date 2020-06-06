import { combineReducers } from 'redux';
import messageReducer from './messages_reducers.js';
import chatsReducer from './chats_reducers.js';
import profileReducer from './profile_reducers.js';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ router: connectRouter(history), messageReducer, chatsReducer, profileReducer })