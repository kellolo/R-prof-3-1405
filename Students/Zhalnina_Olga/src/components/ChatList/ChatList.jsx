import React from "react";
import ReactDom from "react-dom";
import "./ChatList.css";
import { Link } from 'react-router-dom';



import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const users = [
  {
    id: 1,
    name: "Bob",
  },
  {
    id: 2,
    name: "Alice",
  },
  {
    id: 3,
    name: "Clare",
  },
  {
    id: 4,
    name: "Alex",
  },
];

export default class ChatList extends React.Component {
  render() {
    return (
      <List dense className="chatlist">
        {users.map(user => {
          const labelId = `checkbox-list-secondary-label-${ user.id }`;
          return (
            <Link to ={`/chat/${ user.id }`} key={ user.id }>
              <ListItem button>
                <ListItemAvatar primaryText = {`Chat ${ user.id }`}>
                  <Avatar className="avatar">
                    { user.name.substring(0, 2) }
                  </Avatar>
                </ListItemAvatar>
                <ListItemText id={ labelId } primary={ user.name } />
              </ListItem>
            </Link>
          );
        })}
      </List>
    );
  }
}

