import {combineReducers} from 'redux'
import roomReducer from './room-reducer'
import msgReducer from './messages-reducer'
import userReducer from './user-reducer'

export default combineReducers({
  roomReducer, msgReducer, userReducer
});