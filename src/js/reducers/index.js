import { combineReducers } from 'redux';

import {
  UPDATE_SNNIPET,
  SAVE_ACTIVE,
  SAVE_INACTIVE,
  TOGGLE_MODAL
} from 'actions';

const snippet = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_SNNIPET:
      return action.snippet;
    default:
      return state;
  }
};

const canSave = (state = false, action = {}) => {
  switch (action.type) {
    case SAVE_ACTIVE:
      return true;
    case SAVE_INACTIVE:
      return false;
    default:
      return state;
  }
};

const modalOpen = (state = false, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  modalOpen,
  snippet,
  canSave
});

export default rootReducers;
