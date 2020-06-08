import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import CircularProgress from 'material-ui/CircularProgress';

import './style.css';

import Message from '../Message/Message.jsx';

import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
    }

    handleSend = (sender, text) => {
        if (sender == 'Me') {
            this.sendMessage(sender, text)
        }
        this.setState({ text: '' });
    }

    handleChange = (evt) => {
        if(evt.keyCode !== 13) this.setState({ text: evt.target.value });
    }

    handleKeyUp = evt => {
        if(evt.keyCode == 13) this.handleSend('Me', this.state.text);
    }

    sendMessage = (sender, text) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        let chatId = this.props.chatId; 

        // вызов Action
        this.props.sendMessage(messageId, sender, text, chatId);
    }

    componentDidMount() {
        this.props.loadMessages();
    }

    render() {
        let { messages, chatId, widthCont, isLoading } = this.props;

        const loaderWrapperStyle = (
            {
                width: "70%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        );

        if (isLoading) {
            return <CircularProgress
                        style= { loaderWrapperStyle }
                        color="#41506d"
                        size={ 80 }
                    />
        }

        let msgArr = [];

        Object.keys(messages).forEach(key => {
            //if(messages[key].chatId === chatId)

                msgArr.push(
                    <Message 
                        key={ key }
                        text={ messages[key].text }
                        sender={ messages[key].sender }
                    />
                );
        });

        return (
            <div className="messages__layout" style={ { width: widthCont } }>
                <div className="messages__wrapper">
                    { msgArr }
                </div>
                <div className="controls">
                    <div style={ { width: '100%', display: 'flex' } }>
                        <TextField
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            underlineFocusStyle={ { borderColor: '#41506d' } }
                            style={ { fontSize: '22px' } }
                            onChange={ this.handleChange }
                            onKeyUp={ this.handleKeyUp }
                            value={ this.state.text }
                        />
                        <FloatingActionButton
                            backgroundColor="#41506d"
                            onClick={ () => this.handleSend('Me', this.state.text) }>
                            <SendIcon />
                        </FloatingActionButton>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ msgReducer, chatsReducer }) => ({
    messages: msgReducer.messages,
    chats: chatsReducer.chats,
    isLoading: msgReducer.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);