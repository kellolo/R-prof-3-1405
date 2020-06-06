import { combineReducers } from 'redux'
import msgReducer from './messages_reducers';
import chatsReducer from './chats_reducers';

import { connectRouter } from 'connected-react-router'

export default history => combineReducers({ router: connectRouter(history), msgReducer, chatsReducer })