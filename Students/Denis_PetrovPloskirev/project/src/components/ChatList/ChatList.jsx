import React from 'react';

import './ChatList.css';

import { Link } from 'react-router-dom';
import DeleteIcon from 'material-ui/svg-icons/navigation/cancel';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';

import { connect } from 'react-redux';
import { addChat, deleteChat, loadChats } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';

class ChatList extends React.Component {
  state = {
    input: ''
  }

  handleAdd = () => {
    if (this.state.input) {
      this.props.addChat(this.state.input);
      this.setState({ input: '' });
    }
  }

  handleChange = (evt) => {
    if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value });
  }

  handleKeyUp = evt => {
    if (evt.keyCode == 13) this.handleAdd();
  }

  deleteChat = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.deleteChat(id);
  }

  componentDidMount() {
    this.props.loadChats();
  }

  render() {
    let { chats } = this.props;
    return (
      <div className="chatList">
        <div className="chatListInner">
          {Object.keys(chats).map((key) => (
            <Link to={`/chat/${key}/`} key={key} id={key}
              children={
                <div className={this.props.active == chats[key].title ? 'chatListItem chatListItemActive' : 'chatListItem'}>
                  {`  ${chats[key].title}`}
                  <span className="deleteIcon">
                    <DeleteIcon onClick={this.deleteChat.bind(this, key)} viewBox="0 0 24 24" style={{ "width": "12px", "height": "12px" }} color="antiquewhite" hoverColor="darkred" />
                  </span>
                </div>
              }
            />
          ))}
        </div>
        <div className="chatAdder">
          <TextField
            key="textField"
            name="input"
            hintText="Add new chat"
            underlineFocusStyle={{ borderColor: 'darkgoldenrod' }}
            style={{ fontSize: '12px', width: "calc(100% - 34px)", marginLeft: "10px" }}
            inputStyle={{ color: "dimgray" }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={this.handleKeyUp}
          >
          </TextField>
          <AddIcon
            onClick={this.handleAdd}
            color={!this.state.input ? "rgb(243, 243, 243)" : "grey"}
            hoverColor={!this.state.input ? "rgb(243, 243, 243)" : "darkgoldenrod"}
            style={{ cursor: "pointer", width: "24px", height: "24px" }}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
