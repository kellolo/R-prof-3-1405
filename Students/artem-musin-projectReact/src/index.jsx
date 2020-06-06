import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// redux

import { Provider } from 'react-redux'
import { initStore, history } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';


// components
import Router from './router.jsx'

let container = document.getElementById('app')

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
        ,container)