import update from 'react-addons-update';

import {
    ADD_RESPONDENT,
    CLOSE_RESPONDENT,
    SELECT_RESPONDENT,
    SEND_MSG
} from '../action/respondents';


let initialStore = {
    respondent: '',
    respondents: {
        1: {
            name: 'Вася',
            messagesList: {
                1: {
                    user: 'Ext',
                    text: 'Привет'
                },
                2: {
                    user: 'Вася',
                    text: 'Привет'
                },
                3: {
                    user: 'Вася',
                    text: 'Как твои дела?'
                },
            },
        },
        2: {
            name: 'Петр',
            messagesList: {
                1: {
                    user: 'Ext',
                    text: 'Привет'
                },
                2: {
                    user: 'Петр',
                    text: 'Привет'
                },
                3: {
                    user: 'Петр',
                    text: 'Как твои дела?'
                }
            },
        },
        3: {
            name: 'Марина',
            messagesList: {
                1: {
                    user: 'Ext',
                    text: 'Привет'
                },
                2: {
                    user: 'Марина',
                    text: 'Привет'
                },
                3: {
                    user: 'Марина',
                    text: 'Как твои дела?'
                }
            },
        },
    }
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_RESPONDENT: {
            let thisRespondents = store.respondents;
            store.respondents[action.respondentId] = {
                name: action.user,
                messagesList: {
                    0: {
                        user: action.messages.user,
                        text: action.messages.text,
                    }
                }
            };
            return {
                ...store,
                respondent: action.user,
                respondents: thisRespondents
            };
        }

        case SELECT_RESPONDENT: {
            return {
                ...store,
                respondent: action.user,
            };
        }

        case CLOSE_RESPONDENT: {
            return {
                ...store,
                respondent: '',
            };
        }

        case SEND_MSG: {
            return update(store, {
                respondents: {
                    [action.respondentId]: {
                        messagesList: {
                            $merge: {
                                [action.messageId]: {
                                    user: action.user,
                                    text: action.text,
                                }
                            }
                        }
                    }
                }
            });
        }

        default:
            return store;
    }
}

