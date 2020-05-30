import { GET_USERINFO } from '../actions/profile_actions.js';


const initialStore = {
    userInfo: {
        1: {
            name: 'John Cena',
            age: 38,
            photo: 'https://kinoactive.ru/uploads/actors/2018-10/c7beae991ce620e9da-dzhon-sina-4.jpg'
        }
    }
}

export default function profileReducer(store = initialStore, action) {
    switch(action.type) {
        case GET_USERINFO: {
            return store;
        }
        default:
            return store;
    }
}