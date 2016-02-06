import { UPDATE_SNNIPET } from 'actions';

const snippet = (state = { }, action = {}) => {
  switch (action.type) {
    case UPDATE_SNNIPET:
      return action.snippet;
    default:
      return state;
  }
};

export default snippet;
