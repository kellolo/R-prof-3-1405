import React from 'react';
import ReactDom from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';


import { PersistGate } from 'redux-persist/integration/react';

//redux
import { Provider } from 'react-redux';
import initialStore, { history } from './store/store.js';

import { ConnectedRouter } from 'connected-react-router';

const { store, persistor } = initialStore();

ReactDom.render(
    
    <Provider store = { store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
       </PersistGate>
    </Provider>,
    document.getElementById('app')
)

