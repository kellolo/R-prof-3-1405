import React from 'react';
import ReactDom from 'react-dom';
import Router from './router.jsx';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import initStore, { history } from './store/store.js';

/* import 'bootstrap'; */
import 'bootstrap/dist/css/bootstrap.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';

import './layout/style/main.css';

const container = document.getElementById('app');
const { store, persistor } = initStore();

ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={ history }>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>
    ,
    container
);