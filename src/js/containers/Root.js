import { Provider }                    from 'react-redux';
import { Router, browserHistory }      from 'react-router';
import React, { Component, PropTypes } from 'react';

import routes                          from 'routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
