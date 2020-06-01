import update from 'react-addons-update';

// import actions
import { ADD_PROFILE } from '../actions/profiles_actions.js';

const initialStore = {
    profiles: {
        'me': {
            userName: 'Me',
            bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ratione',
            avatar: 'https://via.placeholder.com/128'
        },
        1: {
            userName: 'Brendan Lim',
            bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ratione',
            avatar: 'https://avatars1.githubusercontent.com/u/1788?s=460&v=4'
        },
        2: {
            userName: 'Eric Hoffman',
            bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ratione',
            avatar: 'https://www.film.ru/sites/default/files/persones/_imported/0388875.jpg'
        },
        3: {
            userName: 'Eric'
        }
    }
}

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_PROFILE: {
            return update(store, {
                profiles: {
                    $merge: {
                        [action.chatId]: { userName: action.userName, bio: action.bio, avatar: action.avatar }
                    }
                }
            })
        }
        default:
            return store;
    }
}