import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import AppState from '../../store/app.store';

@inject('appState') @observer
class Home extends Component {
  componentDidMount() {
    // do thing here
  }
  render() {
    return (
      <div>{ this.props.appState.msg }</div>
    );
  }
}

Home.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
}

export default Home;
