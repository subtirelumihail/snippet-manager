import { combineReducers } from 'redux';
import _                   from 'lodash';

import {
  SAVE_ACTIVE,
  SAVE_INACTIVE,
  TOGGLE_MODAL,
  LOADING_START,
  LOADING_STOP,
  SNIPPET_LOADED,
  TOGGLE_SAVING
} from 'actions';

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

const loading = (state = false, action = {}) => {
  switch (action.type) {
    case LOADING_START:
      return true;
    case LOADING_STOP:
      return false;
    default:
      return state;
  }
};

const saving = (state = false, action = {}) => {
  switch (action.type) {
    case TOGGLE_SAVING:
      return !state;
    default:
      return state;
  }
};

const snippet = (state = {}, action = {}) => {
  switch (action.type) {
    case SNIPPET_LOADED:
      return action.snippet || {};
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  modalOpen,
  snippet,
  canSave,
  isSaving: saving,
  isLoading: loading
});

export default rootReducers;
