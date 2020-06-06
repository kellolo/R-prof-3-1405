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

  handleSend = (text, sender) => {
    this.setState({ text: '' });
    if (sender == this.props.user && this.state.text) {
      this.sendMessage(text, sender)
    }
  }

  sendMessage = (text, sender) => {
    let { messages } = this.props;
    let messageId = `id${Date.now()}`
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

  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    let msgArr = [];
    let msgLoader = <CircularProgress color = "darkgoldenrod" thickness = { 2 } className = 'loader'/>;
    let msgBlock = this.props.isLoading ? msgLoader : msgArr;
    let { messages, botName } = this.props;
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
              
              onClick = { () => this.handleSend(this.state.text, this.props.user) }
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