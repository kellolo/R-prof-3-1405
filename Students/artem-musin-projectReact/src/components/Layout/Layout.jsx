import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import MessagesField from '../MessageField/MessageField.jsx';

import { Container, Grid } from '@material-ui/core'

import PropTypes from 'prop-types';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
      } 
  
      static defaultProps = {
        chatId: 1
      }

    render() {
        return (
            <Container 
                maxWidth="lg" 
                fixed 
                component="div" 
                style={{ 
                    backgroundColor: '#e4ccff', 
                    borderRadius: '1.5em',
                    height: '700px'
                    }}>

                    <Header chatId={this.props.chatId} />

                    <Grid container spacing={3}
                        style={{
                            marginTop: '2.5em',
                            boxShadow: '0px 5px 10px -4px rgba(0,0,0,0.7)',
                            borderTopLeftRadius: '1.5em',
                            borderBottomLeftRadius: '1.5em',
                            borderBottomRightRadius: '1.5em',
                            borderTopRightRadius: '1.5em',
                        }}>
                        <Grid
                            container
                            item
                            xs={8}
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                            style={{
                                backgroundColor: 'white',
                                borderBottomLeftRadius: '1.5em',
                                borderTopLeftRadius: '1.5em',
                            }}
                            >
                                <MessagesField />
                        </Grid>
                            <Grid
                                container
                                item
                                alignItems="flex-start"
                                justify="flex-start"
                                xs={4}
                                style={{
                                    border: '1px solid whitesmoke',
                                    borderLeft: 'none',
                                    borderBottomRightRadius: '1.5em',
                                    borderTopRightRadius: '1.5em',
                                }}>    
                                    <ChatList />
                            </Grid>
                    </Grid>
                        
            </Container>
        )
    }
}