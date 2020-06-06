import React from 'react';
import ReactDom from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import  { initStore, history } from './store/store.js'; //хранилище

import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

//components
import Router from './router.jsx';

let container = document.getElementById('app')
const theme = createMuiTheme({})
const { store, persistor } = initStore()

ReactDom.render (
    <Provider store={ store }>
        <PersistGate loading={ null } persistor = { persistor }>
            <ConnectedRouter history = { history }>
            <MuiThemeProvider theme={theme}>
                <Router />
            </MuiThemeProvider> 
        </ConnectedRouter>
        </PersistGate>
        
    </Provider>
    ,
 container)