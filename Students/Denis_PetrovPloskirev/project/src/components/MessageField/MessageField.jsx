import React, { Component } from 'react';

import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx';

import { sendMessage } from '../../store/actions/messages_actions.js';
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

  handleSend = (text, sender) => {
    this.setState({ text: '' });
    if (sender == this.props.user && this.state.text) {
      this.sendMessage(text, sender)
    }
  }

  sendMessage = (text, sender) => {
    let { messages } = this.props;
    let messageId = Object.keys(messages).length + 1;
    //вызов Action
    this.props.sendMessage(messageId, sender, text);
  }

  handleChange = (evt) => {
    if (evt.keyCode !== 13) {
      this.setState({ text: evt.target.value })
    } else {
      this.handleSend(evt.target.value, this.props.user)
    }
  }

  render() {
    let { messages, botName } = this.props;
    let msgArr = [];
    Object.keys(messages).forEach(key => {
      msgArr.push(<Message
        botName = { botName }
        text = { messages[key].text }
        sender = { messages[key].user }
        key = { key } />);
    });

    return (
      <div className = "chatWindow d-flex flex-column">
        <div className = "msgList">
          { msgArr }
        </div>
        <div className = "inputBlock" style = { { width: '75%', display: 'flex', margin: '0 auto' } }>
          <TextField
            fullWidth = { true }
            hintText = { `${this.props.user}, введите сообщение` }
            style = { { fontSize: '14px' } }
            onChange = { this.handleChange }
            onKeyUp = { this.handleChange }
            value = { this.state.text }
            underlineFocusStyle = { {borderColor: 'darkgoldenrod'} }
          />
          <FloatingActionButton 
            backgroundColor = 'darkgoldenrod' 
            onClick = { () => this.handleSend(this.state.text, this.props.user) }
            disabled = { !this.state.text }
            disabledColor = 'rgb(243, 243, 243)'
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>)
  }
}

const mapStateToProps = ({ msgReducer, prflReducer}) => ({
  messages: msgReducer.messages,
  user: prflReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);