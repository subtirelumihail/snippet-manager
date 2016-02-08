export const SAVE_ACTIVE      = 'SAVE_ACTIVE';
export const SAVE_INACTIVE    = 'SAVE_INACTIVE';
export const TOGGLE_MODAL     = 'TOGGLE_MODAL';
export const LOADING_START    = 'LOADING_START';
export const LOADING_STOP     = 'LOADING_STOP';
export const SNIPPET_LOADED   = 'SNIPPET_LOADED';
export const TOGGLE_SAVING    = 'TOGGLE_SAVING';
export const SNIPPETS_LOADED  = 'SNIPPETS_LOADED';

import { batchActions }   from 'redux-batched-actions';
import { routeActions } from 'react-router-redux';

export function canSave(value) {
  return {
    type: !value ? SAVE_INACTIVE : SAVE_ACTIVE
  };
}


export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}

export function loadingStart() {
  return {
    type: LOADING_START
  };
}

export function loadSnippet(snippet) {
  return {
    type: SNIPPET_LOADED,
    snippet
  };
}

export function loadSnippets(snippets) {
  return {
    type: SNIPPETS_LOADED,
    snippets
  };
}


export function loadingStop() {
  return {
    type: LOADING_STOP
  };
}

export function toggleSaving() {
  return {
    type: TOGGLE_SAVING
  };
}

export function saveSuccesfully(url) {
  return dispatch => {
    setTimeout(() => {
      //Reset state
      dispatch(batchActions([
        canSave(false),
        toggleSaving(),
        toggleModal()
      ]));
      dispatch(routeActions.push(`/${url}`));
    }, 1500);
  };
}
