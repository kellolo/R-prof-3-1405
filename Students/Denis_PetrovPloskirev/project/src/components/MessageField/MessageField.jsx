import React, { Component } from 'react';

import { TextField } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import CircularProgress from 'material-ui/CircularProgress';

import Message from '../Message/Message.jsx';

import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

import PropTypes from 'prop-types';

import './style.css';

class MessagesField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
  }

  handleSend = (chatId, text, sender) => {
    this.setState({ text: '' });
    if (sender == this.props.user && this.state.text) {
      this.sendMessage(chatId, text, sender);
    }
  }

  sendMessage = (chatId, text, sender) => {
    //вызов Action
    this.props.sendMessage(chatId, sender, text);
  }

  handleChange = (evt) => {
    if (evt.keyCode !== 13) {
      this.setState({ text: evt.target.value })
    } else {
      this.handleSend(this.props.id, evt.target.value, this.props.user)
    }
  }

  componentDidMount() {
    this.props.loadMessages(this.props.id);
  }

  render() {
    let msgArr = [];
    let msgLoader = <CircularProgress color = "darkgoldenrod" thickness = { 2 } className = 'loader'/>;
    let msgBlock = this.props.isLoading ? msgLoader : msgArr;
    let { messages, botName, id } = this.props;
      Object.keys(messages).forEach(key => {
      msgArr.push(<Message
        botName = { botName }
        text = { messages[key].text }
        sender = { messages[key].sender }
        key = { messages[key]._id } />);
      });

    return (
      <div className = "chatWindow d-flex flex-column">
        <div className = "msgList">
          { !this.props.noMessages && msgBlock }
        </div>
        <div className = "inputBlock" style = { { width: '75%', display: 'flex', margin: '0 auto' } }>
          <TextField
            fullWidth = { true }
            hintText = { `${this.props.user}, введите сообщение` }
            style = { { fontSize: '12px' } }
            onChange = { this.handleChange }
            onKeyUp = { this.handleChange }
            value = { this.state.text }
            underlineFocusStyle = { {borderColor: 'darkgoldenrod'} }
          />
            <SendIcon 
              
              onClick = { () => this.handleSend(id, this.state.text, this.props.user) }
              color = { !this.state.text ? "rgb(243, 243, 243)" : "grey" }
              hoverColor = { !this.state.text ? "rgb(243, 243, 243)" : "darkgoldenrod" }
              style = { {cursor: "pointer", width: "20px", height: "20px", marginTop: "10px"} }
            />
        </div>
      </div>)
  }
}

const mapStateToProps = ({ msgReducer, prflReducer}) => ({
  messages: msgReducer.messages,
  user: prflReducer.user,
  isLoading: msgReducer.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);