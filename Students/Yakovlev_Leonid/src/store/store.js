import initialReducers from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import middlewares from '../components/middlewares/index.js'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export function initStore() {
    let initialStore = {};

    // return createStore(initialReducers, initialStore)
    // return createStore(
    //     initialReducers,
    //     initialStore,
    //     compose(
    //         applyMiddleware(...middlewares)
    //     )
    // );

    return createStore(
        initialReducers(history),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares)
            // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        )
    );
}