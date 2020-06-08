import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router'

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    </BrowserRouter>,
   document.getElementById('root'),
);