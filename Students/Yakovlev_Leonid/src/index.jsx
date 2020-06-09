import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from '@material-ui/';

import './layout/style/main.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//redux
import { Provider } from 'react-redux';
import { initStore, history } from './store/store.js';

import { ConnectedRouter } from 'connected-react-router';

//components
//import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/router.jsx';

let container = document.getElementById('app')



ReactDom.render(
    <Provider store = { initStore() }>
        <ConnectedRouter history = { history }>        
            <div className = "d-flex w-100 justify-content-center">
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </div>
        </ConnectedRouter>
    </Provider>
    ,
    container
)

