import React from 'react';
import ReactDom from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js'; //хранилище

//components
import { BrowserRouter } from 'react-router-dom'
import Router from './router.jsx';

let container = document.getElementById('app')
const theme = createMuiTheme({})

ReactDom.render (
    <Provider store={ initStore ()}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Router />
            </MuiThemeProvider> 
        </BrowserRouter>
    </Provider>
    ,
 container)