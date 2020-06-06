import React from "react";
import ReactDom from "react-dom";
import "./ChatList.css";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "material-ui/svg-icons/content/add";

import { addChat } from "../../store/actions/chats_actions.js";
import { bindActionCreators } from "redux";

import connect from 'react-redux/es/connect/connect';

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

class ChatList extends React.Component {
  state = {
    input: "",
  };

  handleAdd = () => {
    if (this.state.input) {
      this.props.addChat(this.state.input);
      this.setState({ input: "" });
    }
  };

  handleChange = (evt) => {
    if (evt.keyCode !== 13)
      this.setState({ [evt.target.name]: evt.target.value });
  };

  handleKeyUp = (evt) => {
    if (evt.keyCode == 13) this.handleAdd();
  };

  render() {
    let { chats } = this.props;

    let chatsArray = Object.keys(chats).map((key) => {
      const labelId = `checkbox-list-secondary-label-${key}`;
      <Link to={`/chat/${key}`} key={key}>
        <ListItem button>
          <ListItemAvatar primaryText={chats[key].title}>
            <Avatar className="avatar">
              {chats[key].title.substring(0, 2)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText id={labelId} primary={user.name} />
        </ListItem>
      </Link>;
    });

    return (
      <List dense className="chatlist">
        {chatsArray}

        <ListItem
          key="Add new chat..."
          leftIcon={<AddIcon />}
          onClick={this.handleAdd}
          children={
            <TextField
              key="textField"
              name="input"
              hintText="Add new chat"
              onChange={this.handleChange}
              value={this.state.input}
              onKeyUp={this.handleKeyUp}
              multiline
            />
          }
        />
      </List>
    );
  }
}
const mapStateToProps = ({ chatsReducer }) => ({
  chats: chatsReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
