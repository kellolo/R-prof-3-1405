import { createStore } from 'redux';
import initialReducer from './reducers';


export default function initStore() {
    let initialStore = {};

    return createStore(initialReducer, initialStore);
}