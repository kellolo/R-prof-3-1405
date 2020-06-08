import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageField from './components/MessageField';

ReactDOM.render(
    <MuiThemeProvider>
        <MessageField/>
    </MuiThemeProvider>,
   document.getElementById('root'),
);