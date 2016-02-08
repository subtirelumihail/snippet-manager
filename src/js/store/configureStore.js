import { createStore, applyMiddleware } from 'redux';
import { syncHistory }                  from 'react-router-redux';
import { browserHistory }               from 'react-router';
import thunk                            from 'redux-thunk';
import rootReducer                      from 'reducers';
import {enableBatching}                 from 'redux-batched-actions';

const reduxRouterMiddleware = syncHistory(browserHistory);

export default function configureStore(initialState) {
  return createStore(
    enableBatching(rootReducer),
    initialState,
    applyMiddleware(thunk, reduxRouterMiddleware)
  );
}
