import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import { Provider } from 'react-redux';
import { initStore, history } from './store/store.js';

import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
//import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

const { store, persistor } = initStore();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let mainContainer = document.getElementById('app');

ReactDOM.render(
    <Provider store = { store }> 
       <PersistGate loading={ null } persistor={ persistor }>        
            <ConnectedRouter history = { history } >    
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>             
            </ConnectedRouter>   
        </PersistGate>               
    </Provider>     
    , mainContainer
);