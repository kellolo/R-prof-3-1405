import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { addChat } from '../../store/actions/chats_actions'

import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Divider, Badge } from '@material-ui/core'
import { Mail } from '@material-ui/icons';

export default class ChatList extends React.Component {

    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired
    }

    state = {
        text: ''
    }

    render() {
        return (
                <List component="nav" 
                    style={{
                        width: '650px'
                        }}>
                    <Link to='/chat/1/'>
                        <ListItem button>
                            <ListItemText style={{padding: '0em 1em'}} primary="Chat with my parents" />
                                <Badge color="secondary" badgeContent={2}> 
                                    <Mail />
                                </Badge>
                        </ListItem>
                    </Link>

                    <Divider />
                        
                    <Link to='/chat/2/'>
                        <ListItem button>
                            <ListItemText style={{padding: '0em 1em'}} primary="Chat with my friends" />
                                <Badge color="secondary" badgeContent={10}> 
                                    <Mail />
                                </Badge>
                        </ListItem>
                    </Link>

                    <Divider />
                    
                    <Link to='/chat/3/'>
                        <ListItem button>
                            <ListItemText style={{padding: '0em 1em'}} primary="Chat with my girls" />
                                <Badge color="secondary" badgeContent={1000} max={999}> 
                                    <Mail />
                                </Badge>
                        </ListItem>
                    </Link>

                    <Divider />

                    <Link to='/chat/4/'>
                        <ListItem button>
                            <ListItemText style={{padding: '0em 1em'}} primary="Chat with my bestie" />
                                <Badge color="secondary" badgeContent={1}> 
                                    <Mail />
                                </Badge>
                        </ListItem>
                    </Link>

                    <Divider />

                    <Link to='/chat/5/'>
                        <ListItem button>
                            <ListItemText style={{padding: '0em 1em'}} primary="Chat with my pet" />
                                <Mail />
                            </ListItem>
                    </Link>
                </List>
            
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    chats: msgReducer.chats
})

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);
