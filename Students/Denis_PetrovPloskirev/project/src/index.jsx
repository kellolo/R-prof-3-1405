import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

let container = document.getElementById('app');

ReactDom.render(
  <Provider store = { initStore() }>
    <BrowserRouter>
      <MuiThemeProvider>
        <Router />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  container
)