import initialReducers from './reducers/index.js';
import { createStore, compose, applyMiddleware } from 'redux';
import middlewares from '../middlewares/index.js';
import { createBrowserHistory } from 'history';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { routerMiddleware } from 'connected-react-router';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: [ "chtReducer", "prfReducer" ],
 };
 

export const history = createBrowserHistory();

export function initStore() {
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initialReducers(history)), 
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},

        )
               
    );

   const persistor = persistStore(store);

   return { store, persistor };


};