import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import msgReducer from './messages_reducers.js';
import prfReducer from './profile_reducers.js';
import chtReducer from './chats_reducer.js'

export default (history) => combineReducers({ 
    router: connectRouter(history),
    msgReducer, 
    prfReducer, 
    chtReducer
    
});