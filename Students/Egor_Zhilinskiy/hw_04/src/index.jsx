import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';
import { Provider } from 'react-redux';
import initStore from './store/store.js';
//import MessageField from './components/MessageField/MessageField.jsx';
//import ChatList from './components/ChatList/ChatList.jsx';
//import Header from './components/Header/Header.jsx';
import { BrowserRouter} from 'react-router-dom';
import Router from './router.jsx';
// import {MuiThemeProvider} from '@material-ui/core/styles/MuiThemeProvider';

let user = 'Loontik'

let container = document.getElementById('app');
ReactDom.render(
    <BrowserRouter>
    <Provider store = { initStore() }>     
        <div className="d-flex w-100 justify-content-center">            
            <Router/>           
        </div>    
    </Provider>
    </BrowserRouter>
    , container)
