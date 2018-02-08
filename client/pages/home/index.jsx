import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import { AppState } from '../../store/app.store';

@inject('appState') @observer
class Home extends Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount() {
    // do thing here
  }
  changeName(event) {
    this.props.appState.name = event.target.value
  }
  render() {
    return (
      <div>
        <input type="text" name="" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
        <Button raised color="primary">This is a button</Button>
      </div>
    );
  }
}

Home.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

export default Home;
