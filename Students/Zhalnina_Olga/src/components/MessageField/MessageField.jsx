import React, { Component } from "react";
import ReactDom from "react-dom";
import "./MessageField.css";

import Message from "../Message/Message.jsx";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import { sendMessage, loadMessages } from "../../store/actions/messages_actions.js";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class MessagesField extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      isUserAnswer: false,
      text: "",
    };
    this.textInput = React.createRef();
  }

  handleSend = (text, sender) => {
    this.setState({ text: "" });
    if (sender == "Me") {
      this.sendMessage(text, sender);
      this.setState.isUserAnswer = true;
    }
  };

  sendMessage = (text, sender) => {
    let { messages } = this.props;
    let messageId = Object.keys(messages).length + 1;
    this.props.sendMessage(messageId, sender, text);    
  };

  handleChange = (evt) => {
    evt.keyCode !== 13
      ? this.setState({ text: evt.target.value })
      : this.handleSend(evt.target.value, "Me");
  };

  componentDidMount() {
    this.props.loadMessages();
    this.textInput.current.focus();
  }

  componentDidUpdate() {
    document.getElementById('message_field').scrollTo({ top: 999999 })
}
 
  render() {
    let { messages } = this.props;

    let msgArr = [];

    Object.keys(messages).forEach((key) => {
      msgArr.push(
        <Message
          text={messages[key].text}
          sender={messages[key].user}
          key={key}
        />
      );
    });

    return (
      <div className="dialog">
        <div className="message_field">{msgArr}</div>
        <div className="answer_group">
          <input
            type="text"
            ref={ this.textInput }
            className="answer_group_input"
            placeholder="Написать сообщение..."
            onChange={this.handleChange}
            onKeyUp={this.handleChange}
            value={this.state.text}
          />
          <IconButton
            aria-label="send message"
            className="icon_btn"
            onClick={() => this.handleSend(this.state.text, "Me")}
          >
            <SendIcon className="btn_send" />
          </IconButton>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ msgReducer }) => ({
  messages: msgReducer.messages,
  respondent: msgReducer.respondent
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);
