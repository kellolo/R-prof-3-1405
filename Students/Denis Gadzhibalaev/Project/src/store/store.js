import initialReducers from './reducers/index.js';
import { createStore } from 'redux';

export default function initStore() {
    let initialStore = {};

    return createStore(
        initialReducers, 
        initialStore,
               
window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    );

}