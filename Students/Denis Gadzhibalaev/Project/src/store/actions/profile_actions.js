export let SET_NAME = '@@Name/SET_NAME';
export let SET_EMAIL = '@@email/SET_EMAIL';

export const setUserName = (name) => ({
    type: SET_NAME,
    name   
})

export const setUserEmail = (email) => ({
    type: SET_EMAIL,
    email   
})
