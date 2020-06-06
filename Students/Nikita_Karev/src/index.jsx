import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

//redux
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { initStore, history } from './store/store.js';

import { ConnectedRouter } from 'connected-react-router';

//components
// import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const { store, persistor } = initStore();

let container = document.getElementById('app');

ReactDom.render(
    <MuiThemeProvider>
         <PersistGate loading = { null } persistor = { persistor }>
            <Provider store = { store }>
                <ConnectedRouter history = { history }>
                    <Router />
                </ConnectedRouter>
            </Provider>
        </PersistGate>
    </MuiThemeProvider>   
    ,
    container);

