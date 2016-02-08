import 'styles/main.scss';

import React, { Component } from 'react';

//Import layout elements
import Header from 'components/header';
import Footer from 'components/footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
