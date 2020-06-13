import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx';

import "./style.css";

import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';


class MessagesField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    };

    handleSend = (chatId, text, sender) => {
        this.setState({text: ''});
        if(sender == this.props.user && text !== "") {
            this.sendMessage(chatId, text, sender);
        }
    };

    sendMessage = (chatId, text, sender) => {
        this.props.sendMessage(chatId, sender, text);
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.handleSend(evt.target.value, this.props.user);
        }
    };
    
    componentDidMount() {
        this.props.loadMessages(this.props.chatId);
    };

    render() {
        let { messages, chatId } = this.props;

        let msgArr = [];

        Object.keys(messages).forEach(key => {
            msgArr.push(<Message 
                text={ messages[key].text } 
                sender={ messages[key].sender }
                key = { key }/>);
        });

        return (<div className = "d-flex flex-column msgfield">
                    <div className = "msgs">
                        { msgArr }
                    </div>
                    <hr/>
                    <div className = "d-flex w-80 textblock">
                        <TextField
                        name="input"
                        fullWidth = { true }
                        hintText = 'Введите сообщение' 
                        type = "text" 
                        onChange = { this.handleChange }
                        onKeyUp = { this.handleChange }
                        value = { this.state.text }
                        />
                        <FloatingActionButton 
                        onClick = { () => this.handleSend(chatId, this.state.text, this.props.user) }
                        disabled = { !this.state.text }
                        disabledColor = 'rgb(243, 243, 243)'
                        className = "ml-3"
                        >
                            <SendIcon />
                        </FloatingActionButton>  
                    </div>
                </div>    
                );
    };
}

const mapStateToprops = ({ msgReducer, profReducer }) => ({
    messages: msgReducer.messages,
    user: profReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToprops, mapDispatchToProps)(MessagesField);