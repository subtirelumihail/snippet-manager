import { combineReducers } from 'redux';
import { routeReducer }    from 'react-router-redux';


import {
  SAVE_ACTIVE,
  SAVE_INACTIVE,
  TOGGLE_MODAL,
  LOADING_START,
  LOADING_STOP,
  SNIPPET_LOADED,
  SNIPPETS_LOADED,
  TOGGLE_SAVING,
  CLEAN_CONTENT,
  UPDATE_CONTENT,
  HAS_ERORR,
  NO_ERROR
} from 'actions';


/**
 *  Check if the save button should be displayed or not
 */
const canSave = (state = false, action = {}) => {
  switch (action.type) {
    case SAVE_ACTIVE:
      return true;
    case SAVE_INACTIVE:
    case CLEAN_CONTENT:
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

/**
 *  Toggle the saving state
 */
const saving = (state = false, action = {}) => {
  switch (action.type) {
    case TOGGLE_SAVING:
      return !state;
    default:
      return state;
  }
};

/**
 * Get the snippet from the url and save it in state
 */
const snippet = (state = {}, action = {}) => {
  switch (action.type) {
    case SNIPPET_LOADED:
      return action.snippet || {};
    default:
      return state;
  }
};

/**
 * Get all snippets from firebase and send them to state
 */
const snippets = (state = [], action = {}) => {
  switch (action.type) {
    case SNIPPETS_LOADED:
      return action.snippets ? Object.keys(action.snippets).map(key => action.snippets[key]).reverse() : state;
    default:
      return state;
  }
};

/**
 * Set the state for the snippet content editor
 */
const content = (state = '', action = {}) => {
  switch (action.type) {
    case CLEAN_CONTENT:
      return '';
    case UPDATE_CONTENT:
      return action.content;
    default:
      return state;
  }
};

const setSaveErrors = (state = false, action = {}) => {
  switch (action.type) {
    case HAS_ERORR:
      return true;
    case TOGGLE_MODAL:
    case NO_ERROR:
      return false;
    default:
      return state;
  }
};


const rootReducers = combineReducers({
  routing: routeReducer,
  content,
  modalOpen,
  snippets,
  snippet,
  canSave,
  isSaving: saving,
  isLoading: loading,
  hasError: setSaveErrors
});

export default rootReducers;
