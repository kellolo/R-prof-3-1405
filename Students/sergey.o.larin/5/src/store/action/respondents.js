export let ADD_RESPONDENT = 'ADD_RESPONDENT';
export let SELECT_RESPONDENT = 'SELECT_RESPONDENT';
export let CLOSE_RESPONDENT = 'CLOSE_RESPONDENT';

export let SEND_MSG = 'SEND_MSG';

export let addRespondent = (respondentId, user, messages) => ({
    type: ADD_RESPONDENT,
    respondentId,
    user,
    messages,
});

export let selectRespondent = (user) => ({
    type: SELECT_RESPONDENT,
    user,
});

export let closeRespondent = () => ({
    type: CLOSE_RESPONDENT,
})

export let sendMessage = (respondentId, messageId, user, text) => ({
    type: SEND_MSG,
    respondentId,
    messageId,
    user,
    text,
});