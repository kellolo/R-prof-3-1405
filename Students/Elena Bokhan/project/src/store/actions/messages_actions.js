export let SEND_MSG = '@@messages/SEND';

export let sendMessage = (messageId, sender, text) => ({
		type: SEND_MSG,
		messageId,
		sender,
		text
})