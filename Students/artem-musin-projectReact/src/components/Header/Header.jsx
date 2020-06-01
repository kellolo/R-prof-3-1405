import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    static propTypes = {
      chatId: PropTypes.number
    } 

    static defaultProps = {
      chatId: 1
    }



    render() {

        
        return (
      <AppBar position="relative"
        style={{
            flexGrow: 1,
            borderRadius: "1.5em",
            top: '1em',
        }}>
          <Toolbar>

              <IconButton edge="start" 
                style={{marginRight: '1em'}} 
                color="inherit">
              </IconButton>

                <Typography 
                  style={{flexGrow: 1}} 
                  variant="h6">
                  Chat room { this.props.chatId }
                </Typography>
                    
                        
                          <Button>
                            <Link to='/profile/'
                              style={{
                                textDecoration: 'none',
                                color: 'whitesmoke',
                              }}>
                              <AccountCircle />
                            </Link>
                          </Button>
                        
          </Toolbar>
        </AppBar>
        )
    }
}