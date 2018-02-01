import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app.js';

const root = document.querySelector('#app-root')

const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component/>
        </AppContainer>,
     root)
}

render(App)

if (module.hot) {
    module.hot.accept('./app.js', () => {
        const NextApp = require('./app.js').default
        render(NextApp)
    })
}