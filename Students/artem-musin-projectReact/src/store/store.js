import initialReducers from './reducers/index.js'
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import middleWares from '../middleWares/index.js';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['msgReducer', 'chatsReducer'],
 };

export const history = createBrowserHistory()



export function initStore() {
    let initialStore = {};
    
    const store = createStore(
        persistReducer(persistConfig, initialReducers(history)),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middleWares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
        ),
    );

    const persistor = persistStore(store);

    return { store, persistor };
}
