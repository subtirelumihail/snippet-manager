import React    from 'react';
import { Route, IndexRoute } from 'react-router';

import App   from 'containers/App';

import Snippet from 'components/snippet';
import View    from 'components/view';
import List    from 'components/list';

export default  (
  <Route path="/" component={App}>
    <IndexRoute component={Snippet}/>
    <Route path="new" component={Snippet} />
    <Route path="list" component={List} />
    <Route path=":url" component={View} />
  </Route>
);
