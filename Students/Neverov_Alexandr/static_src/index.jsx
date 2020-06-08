import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router'
import { Provider } from 'react-redux';
import initStore from './utils/store';

ReactDOM.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
   document.getElementById('root'),
);