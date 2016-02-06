import React    from 'react';
import { Route } from 'react-router';

import App   from 'containers/App';
import Hello from 'components/hello/hello';

export default  (
  <Route path="/" component={App}>
    <Route path="hello" component={Hello}/>
  </Route>
);
