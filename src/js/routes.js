import React    from 'react';
import { Route, IndexRoute } from 'react-router';

import App   from 'containers/App';

import Snippet from 'components/snippet';

export default  (
  <Route path="/" component={App}>
    <IndexRoute component={Snippet}/>
    <Route path="/new" component={Snippet} />
    <Route path="/list" component={App} />
    <Route path="*" component={Snippet} />
  </Route>
);
