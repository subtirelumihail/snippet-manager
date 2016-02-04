import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HelloPage from './pages/hello.js';

let App = React.createClass({
  render() {
    return (
      <div className="Container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="hello">Hello</Link>
        </nav>
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="hello" path="/hello" handler={HelloPage}/>
  </Route>
);
 
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
