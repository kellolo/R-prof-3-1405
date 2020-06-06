import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import initStore, { history } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';

import Router from './router.jsx';


const { store, persistor } = initStore();
let container = document.getElementById('app');

const app = (
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={ history }>
                <Router/>
            </ConnectedRouter>
        </PersistGate>
    </Provider>
)

ReactDom.render(app, container);
