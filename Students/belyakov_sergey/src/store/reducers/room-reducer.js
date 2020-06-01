import update from 'react-addons-update'

import {ADD_ROOM, RENAME_ROOM} from "../actions/room-actions";

const initialStore = {
  rooms: {
    1: {title: 'Чат 1'},
    2: {title: 'Чат 2'},
    3: {title: 'Чат 3'},
    4: {title: 'Чат 4'}
  }
}

export default function roomReducer(store = initialStore, action) {
  switch (action.type) {

    case ADD_ROOM: {
      const roomId = Object.keys(store.rooms).length + 1;
      return update(store, {
        rooms: {
          $merge: {
            [roomId]: {
              title: action.title,
            }
          }
        }
      })
    }

    case RENAME_ROOM: {
      return update(store, {
        rooms: {
          [action.roomId]: {
            $set: {
              title: action.title
            }
          }
        }
      })
    }

    default:
      return store
  }
}