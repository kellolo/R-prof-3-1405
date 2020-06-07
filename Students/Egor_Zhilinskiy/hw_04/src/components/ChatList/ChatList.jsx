import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


export default class ChatList extends Component {
  render() {
    return (
      <List>
        <Link to='/chat/1/'>
          <ListItem button >
            <ListItemAvatar>
              <Avatar
              />
            </ListItemAvatar>
            <ListItemText primary='Chat Room 1' />
          </ListItem>
        </Link>
        <Link to='/chat/2/'>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
              />
            </ListItemAvatar>
            <ListItemText primary='Chat Room 2' />
          </ListItem>
        </Link>
        <Link to='/chat/3/'>
          <ListItem button >
            <ListItemAvatar>
              <Avatar
              />
            </ListItemAvatar>
            <ListItemText primary='Chat Room 3' />
          </ListItem>
        </Link>
      </List>
    )
  }
}