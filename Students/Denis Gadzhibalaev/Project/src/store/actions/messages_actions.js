export let SEND_MSG = '@@messages/SEND_MESSAGE';

export let sendMessage = (messageId, sender, text, chatId) => ({
    type: SEND_MSG,
    messageId,
    sender,
    text,
    chatId
})