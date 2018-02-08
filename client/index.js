import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { lightBlue, pink } from 'material-ui/colors';

import App from './pages/app';
import appState from './store/app.store';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    accent: pink,
    type: 'light',
  },
})

const root = document.querySelector('#app-root')

const render = (Component) => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  renderMethod(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Component />
          </MuiThemeProvider>
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
