import React from 'react';

import { Link } from 'react-router-dom';

import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class ChatList extends React.Component { 
    render() {
        return (
            <List>
                <Link to = "/chat/1/">
                    <ListItem primaryText = "Chat 1" leftIcon = { <ContentSend /> }/>
                </Link>
                <Link to = "/chat/2/">
                    <ListItem primaryText = "Chat 2" leftIcon = { <ContentSend /> } />
                </Link>
            </List>
        )
    }
 }