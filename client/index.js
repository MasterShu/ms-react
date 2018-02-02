import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './pages/app';
import appState from './store/app.store';

const root = document.querySelector('#app-root')

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./pages/app.jsx', () => {
    const NextApp = require('./pages/app.jsx').default // eslint-disable-line
    render(NextApp)
  })
}
