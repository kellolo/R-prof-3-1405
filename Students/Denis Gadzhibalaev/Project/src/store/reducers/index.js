import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import msgReducer from './messages_reducer.js';
import prfReducer from './profile_reducer.js';
import chtReducer from './chats_reducer.js'

export default (history) => combineReducers({ 
    router: connectRouter(history),
    msgReducer, 
    prfReducer, 
    chtReducer
    
});