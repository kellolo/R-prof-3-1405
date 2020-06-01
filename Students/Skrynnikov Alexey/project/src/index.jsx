import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './layout/style/main.css';

import { Provider } from 'react-redux';
import initStore from './store/store.js';


import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

let container = document.getElementById('app');


ReactDom.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <Provider store = { initStore() }>
                <Router />
            </Provider>
        </BrowserRouter>
    </MuiThemeProvider>
    ,
    container
);