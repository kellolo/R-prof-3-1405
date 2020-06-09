import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import {initStore, history} from './store/store.js';

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router.jsx';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

let container = document.getElementById('app')

const { store, persistor } = initStore();

ReactDom.render(
    
        <Provider store = { store }>
            <PersistGate loading={ null } persistor={ persistor }>
                <ConnectedRouter history = { history }>
                    <div className = "w-100 justify-content-center">
                        <MuiThemeProvider>
                            <Router />
                        </MuiThemeProvider>
                    </div>
                </ConnectedRouter>
            </PersistGate>    
        </Provider>
    ,
    container
)