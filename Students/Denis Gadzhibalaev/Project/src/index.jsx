import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './layout/style/main.sass';

import Router from './router.jsx';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { initStore, history } from './store/store.js';

const { store, persistor } = initStore();

ReactDom.render(
    <Provider store = { store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history = { history }>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root') );