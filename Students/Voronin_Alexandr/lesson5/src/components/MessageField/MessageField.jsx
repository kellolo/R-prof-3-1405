import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { TextField, Fab } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './style.css';
import Message from '../Message/Message.jsx';

import { sendMessage,loadMessages } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessageField extends Component {
    constructor (props) {
        super (props)
        this.state = {
            //botResponse: false,
            text: '',
            
        }
    }

    handleSend = (chatId, text, sender) => {
        this.setState({text: ''})
        if (sender == 'Me') {
            this.sendMessage(chatId, text, sender)
        }
    }

    sendMessage = (chatId, text, sender) => {
        this.props.sendMessage(chatId, sender, text)
    }

    componentDidMount() {
        this.props.loadMessages(this.props.chatId);
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ text: evt.target.value })
    }


    render () {
        let { messages, chatId } = this.props;

        let msgArr = []
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message
                text={ messages[key].text } 
                sender={ messages[key].sender }
                key={ key }/>);
        });
        
        return (
            <div className="layout"> 
                <div className="message-field">
                    { msgArr }
                </div>
                <div className="inputMsg">
                    <TextField id="standart-basic"
                        label="Message"
                        fullWidth={ true }
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleChange }
                        value={ this.state.text }
                    />
                    <Fab size="small" color="primary"
                    onClick={ () => this.handleSend(chatId, this.state.text, 'Me') }>
                        <SendIcon/>
                    </Fab>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
})

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);