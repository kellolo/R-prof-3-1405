import React from 'react';
import ReactDom from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';


ReactDom.render(
    
    <Provider store = { initStore() }>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app')
)

