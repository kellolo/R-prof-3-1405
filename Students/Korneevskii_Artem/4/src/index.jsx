import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import { Provider } from 'react-redux';
import initStore from './store/store.js';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let mainContainer = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>    
        <Provider store = { initStore() }>    
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>             
        </Provider> 
    </BrowserRouter>      
    , mainContainer
);