import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

//components
import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    container);

