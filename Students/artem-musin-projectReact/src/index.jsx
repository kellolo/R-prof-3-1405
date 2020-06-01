import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// redux

import { Provider } from 'react-redux'
import initStore from './store/store.js'


// components
import Router from './router.jsx'
import { BrowserRouter } from 'react-router-dom';

let container = document.getElementById('app')


ReactDom.render(
<BrowserRouter>
        <Provider store={initStore()}>
                <MuiThemeProvider>
                        <Router />
                </MuiThemeProvider>
        </Provider>
</BrowserRouter>
        ,container)