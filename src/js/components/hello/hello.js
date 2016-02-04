import React from 'react';

import './hello.scss';

import TestPic from '../../../images/test1.gif';

let Hello = React.createClass({
  render() {
    return(
      <div className="Hello">
        <p>It works</p>
        <img src={TestPic} />
      </div>
    );
  }
});

export default Hello;
