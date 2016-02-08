import React      from 'react';
import {render}   from 'react-dom';
import { browserHistory }      from 'react-router';

import Root           from 'containers/Root';
import configureStore from 'store/configureStore';

// Load clean snippet content action
import {cleanContent} from 'actions';

const store = configureStore();

// Listen for route change so we can reset the content of the snippet
browserHistory.listen( () => {
  store.dispatch(cleanContent());
});


render(<Root store={store} />, document.querySelector('.root'));
