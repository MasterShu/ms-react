import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../routes';

class App extends Component {
  componentDidMount() {
    // do things here
  }
  render() {
    return [
      <div key="header">
        <Link to="/">Home</Link>
        <br />
        <Link to="/product">Product</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}

export default App;
