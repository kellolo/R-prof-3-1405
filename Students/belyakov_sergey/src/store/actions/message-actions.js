export const SEND_MESSAGE = '@@message/SEND_MESSAGE'

export const sendMessage = (messageId, message, author, roomId) => ({
  type: SEND_MESSAGE,
  messageId,
  message,
  author,
  roomId
})