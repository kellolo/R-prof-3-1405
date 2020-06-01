import { combineReducers } from 'redux';
import msgReducer from './messenger.js';
import respondentsReducer from './respondents.js';


export default combineReducers({ respondentsReducer, msgReducer })