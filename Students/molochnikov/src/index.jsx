

import {createStore} from 'redux';

function playList (state=[], action) {
    console.log(action);
    return state;
}

const store = createStore(playList);

store.subscribe(()=>{
    console.log('subs', store.getState());
});

store.dispatch({type: 'TYPE', payload: 'данные'});

/*
import './components/sass/messages.sass';

import React from 'react';
import ReactDOM from 'react-dom';

import MessageField from  './components/MessageField.jsx';

// redux
import {Proveder} from 'react-redux';
import initStore from './store/store.js';



ReactDOM.render(
   <Provider store={initStore}>
       <MessageField/>
   </Provider>,
    document.getElementById('root'),
 );
 */