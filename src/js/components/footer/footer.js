import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content is-centered">
            <p>
              <strong>SNIPJS</strong> by <a href="http://github.com/subtirelumihail" target="_blank">Subtirelu Mihail</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/subtirelumihail/snippet-manager" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
