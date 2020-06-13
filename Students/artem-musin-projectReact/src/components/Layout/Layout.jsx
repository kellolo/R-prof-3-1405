import React from 'react';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import MessagesField from '../MessageField/MessageField.jsx';

import { Container, Grid } from '@material-ui/core'

const messageFieldStyles = {
    backgroundColor: 'white',
    borderBottomLeftRadius: '1.5em',
    borderTopLeftRadius: '1.5em',
}

const chatListStyles = {
    border: '1px solid whitesmoke',
    borderLeft: 'none',
    borderBottomRightRadius: '1.5em',
    borderTopRightRadius: '1.5em',
}

const backStyles = {
    marginTop: '2.5em',
    boxShadow: '0px 5px 10px -4px rgba(0,0,0,0.7)',
    borderTopLeftRadius: '1.5em',
    borderBottomLeftRadius: '1.5em',
    borderBottomRightRadius: '1.5em',
    borderTopRightRadius: '1.5em',
}

const containerStyles = {
    backgroundColor: '#e4ccff', 
    borderRadius: '1.5em',
    height: 'auto',
    padding: '1.5em 1.5em'
}

export default class Layout extends React.Component {
  

    render() {
        return (
            <Container 
                maxWidth="lg" 
                fixed 
                component="div" 
                style={containerStyles}>

                    <Header chatTitle={this.props.chatTitle} />

                    <Grid container spacing={3}
                        style={backStyles}>
                        <Grid
                            container
                            item
                            xs={8}
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                            style={messageFieldStyles}
                            >
                                <MessagesField />
                        </Grid>
                            <Grid
                                container
                                item
                                alignItems="flex-start"
                                justify="flex-start"
                                xs={4}
                                style={chatListStyles}>    
                                    <ChatList />
                            </Grid>
                    </Grid>
                        
            </Container>
        )
    }
}