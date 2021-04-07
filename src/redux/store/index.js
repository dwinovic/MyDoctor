import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: 'novi',
  dream: 'software engineer',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_USERNAME') {
    return {
      ...state,
      name: 'Novi Dwi Cahya',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
