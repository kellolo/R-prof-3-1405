import update from 'react-addons-update'

import {SET_NAME} from '../actions/user-actions'

const initialStore = {
  user: {
    name: 'user'
  }
}

export default function userReducer(store = initialStore, action) {
  switch (action.type) {
    case SET_NAME: {
      return update(store, {
        user: {
          $set: {name: action.name}
        }
      })
    }

    default: {
      return store
    }
  }
}