import React from 'react';
import HelloComponent from 'components/hello/hello';
import WorldComponent from 'components/world/world';

const Hello = React.createClass({

  render: function() {
    return (
      <span>
        <HelloComponent />
        <WorldComponent />
      </span>
    );
  }

});

module.exports = Hello;
