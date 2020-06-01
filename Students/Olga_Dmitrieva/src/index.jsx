import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router.jsx';
import { BrowserRouter } from 'react-router-dom';

let container = document.getElementById('app')

ReactDom.render(
    <BrowserRouter>
        <Provider store = { initStore() }>
            <div className = "w-100 justify-content-center">
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </div>
        </Provider>
    </BrowserRouter>
    ,
    container
)