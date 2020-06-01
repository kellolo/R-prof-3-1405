import update from 'react-addons-update';

const initialStore = {
    user: 'Ext',
    contacts: ['Вася', 'Кирилл', 'Саша', 'Тина', 'Евгений', 'Илья', 'Мария', 'Юлия', 'Даниил', 'Настя'],
    contactInfo: {
        number: 952684346,
        surname: 'удачная фамилия',
    }
}


export default function msgReducer(store = initialStore, action) {
    switch (action.type) {

        default:
            return store;
    }
}