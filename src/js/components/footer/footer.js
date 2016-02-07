import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content is-centered">
            <p>
              <strong>SNIP</strong> by <a href="http://github.com/subtirelumihail">Subtirelu Mihail</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/jgthms/bulma">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
