import { combineReducers } from 'redux';

import msgReducer from './messages_reducers.js';
import prfReducer from './profile_reducers.js';
import chtReducer from './chats_reducer.js'

export default combineReducers({ msgReducer, prfReducer, chtReducer })