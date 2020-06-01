import React from 'react';

import { Link } from 'react-router-dom';

import { List, ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <Link to = "/chat/1/">
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 1" />
                    </ListItem> 
                </Link>
                <Link to = "/chat/2/">
                <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 2" />
                    </ListItem>
                </Link>
            </List>
        )
    }
}