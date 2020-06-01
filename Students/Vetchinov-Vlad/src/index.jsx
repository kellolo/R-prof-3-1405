//react
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js'

//components
import MessagesField from './components/MessageField/MessageField.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

let container = document.getElementById('app');

let user = 'Me';

ReactDom.render(
    <Provider store = { initStore() }>
        <MuiThemeProvider>
        <MessagesField user={ user } />
        <ContactList />
        </MuiThemeProvider>
    </Provider>
    ,
    container
);