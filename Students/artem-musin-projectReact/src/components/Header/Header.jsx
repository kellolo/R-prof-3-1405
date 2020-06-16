import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';


const appBarStyles = {
  flexGrow: 1,
  borderRadius: "1.5em",
  top: '1em',
}

const chatTitleStyles = {
  flexGrow: 1
}

const profileButtonStyles = {
  alignContent: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
}

const buttonStyles = {
  color: 'whitesmoke',
  outline: 'none'
}

export default class Header extends React.Component {

    static propTypes = {
      chatId: PropTypes.string
    } 

    render() {

        return (
      <AppBar position="relative"
        style={appBarStyles}>
          <Toolbar>

                <Typography 
                  style={chatTitleStyles} 
                  variant="h6">
                  { this.props.chatTitle }
                </Typography>
                    
                          <Link to='/profile/'
                              style={profileButtonStyles}>
                              <Button
                                 style={buttonStyles}>
                                  PROFILE
                            
                              </Button>
                            </Link>

                              <Link to='/auth/'>
                                <Button 
                                  style={buttonStyles} >
                                  LOGIN
                                </Button>
                              </Link>
                        
          </Toolbar>
        </AppBar>
        )
    }
}

