import { createStore } from 'redux';
import initialReducers from './reducers/';

export default function initStore() {
    let initialStore = {};

    return createStore(initialReducers, initialStore)
}