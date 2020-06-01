export let SEND_MSG = 'SEND_MSG';
export let SELECT_RESPONDENT = 'SELECT_RESPONDENT';
export let CLOSE_RESPONDENT = 'CLOSE_RESPONDENT';

export let sendMessage = (messageId, user, text) => ({
    type: SEND_MSG,
    messageId,
    user,
    text,
});

export let selectRespondent = (user) => ({
    type: SELECT_RESPONDENT,
    user,
});

export let closeRespondent = () => ({
    type: CLOSE_RESPONDENT,
})
