import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './router.jsx';
import { Provider } from 'react-redux';
import initStore from './store/store';


let container = document.getElementById('app');

ReactDom.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </Provider>
    , container)
