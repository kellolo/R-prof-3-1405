import initialReducers from './reducers';
import { createStore } from 'redux';

export default function initStore() {
    let initialStore = {};

    return createStore(initialReducers, initialStore);
}