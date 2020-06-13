export let SET_NAME = '@@name/SET';
export let SET_BIO = '@@bio/SET';

export let setName = (name) => {
    return {
        type: SET_NAME,
        name
    }
};

export let setBio = (text) => {
    return {
        type: SET_BIO,
        text
    }
}