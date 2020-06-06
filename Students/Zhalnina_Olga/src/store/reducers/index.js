import { combineReducers } from 'redux';
import msgReducer from './messages_reducers.js';
import chatsReduser from './chats_redusers.js';

import { connectRouter} from 'connected-react-router';

export default history => combineReducers({ router: connectRouter(history), msgReducer, chatsReduser })