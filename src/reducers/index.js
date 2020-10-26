const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  ciddade: '',
};

function saveState(state = INITIAL_STATE, action) {
  console.log(action);
  switch(action.type) {
    case 'ADD_INFO':
      return {...state, ...action.value};
    default:
      return state;
  }
}

export default saveState;
