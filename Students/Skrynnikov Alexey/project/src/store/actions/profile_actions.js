export let SET_NAME = '@@name/SET';

export let setName = (name) => {
  return {
    type: SET_NAME,
    name
  }
};

