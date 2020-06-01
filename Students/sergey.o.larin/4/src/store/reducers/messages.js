import update from 'react-addons-update';

import { CLOSE_RESPONDENT, SELECT_RESPONDENT, SEND_MSG } from '../action/messages.js';

const initialStore = {
    user: 'Ext',
    users: ['Вася', 'Петр', 'Марина'],
    respondent: '',
    messages: {
        1: {
            user: 'Ext',
            text: 'Привет'
        },
        2: {
            user: null,
            text: 'Привет'
        },
        3: {
            user: null,
            text: 'Как твои дела?'
        }
    }
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: {
                    $merge: {
                        [action.messageId]: {
                            user: action.user,
                            text: action.text,
                        }
                    }
                }
            });
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
                messages: {
                    1: {
                        user: null,
                        text: 'Выберите собеседника'
                    },
                },
            };
        }

        default:
            return store;
    }
}