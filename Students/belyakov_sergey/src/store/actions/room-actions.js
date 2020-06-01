export const ADD_ROOM = '@@chat/ADD_ROOM'

export const RENAME_ROOM = '@@chat/RENAME_ROOM'

export const addRoom = (title) => ({
  type: ADD_ROOM,
  title
})

export const renameRoom = (roomId, title) => ({
  type: RENAME_ROOM,
  roomId,
  title
})