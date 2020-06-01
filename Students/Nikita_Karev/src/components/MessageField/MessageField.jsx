// container
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

//material-ui
import { TextField } from 'material-ui';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Message from '../Message/Message.jsx';

import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessagesField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleSend = (text, sender) => {
        this.setState({ text: ''});
        if (sender == this.props.user && text !== '') {
            this.sendMessage(text, sender);
        }
    }

    sendMessage(text, user) {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        if (user === this.props.user) {
            this.props.sendMessage(messageId, user, text);
            this.setState({text: ''});
            document.getElementById('message-input').value = '';
        } else {
            this.props.sendMessage(messageId, user, text);
        }
        //вызов Action
        // this.props.sendMessage(messageId, sender, text);
    }

    handleChange = (evt) => {
        // this.setState({ text: value });
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.handleSend(evt.target.value, this.props.user);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let { messages } = this.props;
        if (this.props.messages[Object.keys(messages).length].user != null &&
            Object.keys(prevProps.messages).length !== Object.keys(messages).length) {      // на каждое сообщение - ответ бота
            setTimeout(() => {
                this.sendMessage('Auto-answer from Bot', null);
            }, 1000);
        };
        window.scrollTo({ top: 999999, behavior: "smooth"});
    }   

    render() {
        let { messages, users } = this.props;

        let msgArr = []
        
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message
                text={ messages[key].text }
                sender={ messages[key].user }
                key={ key } />);
        });

        return (
            <div className="wrapper">
                <div className="dialog-window">
                    <span className="dialog-name mb-1"> John Carmack | Last seen - 24/05/2020</span>
                    <div className="message-field">
                        { msgArr }
                    </div>
                    <div className="d-flex justify-content-center controls w-100 mt-1 message-text">
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="input" 
                                    id="message-input" 
                                    label="With a grid"
                                    hintText="Write your message"
                                    style={ { fontSize: '22px', width: '1120px' } }
                                    onChange = { this.handleChange }
                                    onKeyUp = { this.handleChange }
                                    value = { this.state.text } />
                            </Grid>
                        </Grid>
                        <IconButton
                            disabled={ !this.state.text }
                            onClick={ () => this.handleSend(this.state.text, this.props.user) }>
                            <Send style= { { color: '#00bcd4', cursor: 'pointer' } }/>
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    } 
}

const mapStateToProps = ({ msgReducer, profileReducer }) => ({
    messages: msgReducer.messages,
    user: profileReducer.user
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);