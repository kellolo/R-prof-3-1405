export let SEND_MSG = '@@messages/SEND';

export let sendMessage = (messageId, sender, text, chatId) => ({
    type: SEND_MSG,
    messageId,
    sender,
    text,
    chatId
})