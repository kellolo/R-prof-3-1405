// container
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

//material-ui
import { TextField } from 'material-ui';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

import Message from '../Message/Message.jsx';

import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js';
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

    sendMessage(text, sender) {
        let { messages } = this.props;
        let messageId = Object.keys(this.props.messages).length + 1;
    
        this.props.sendMessage(messageId, sender, text);
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.handleSend(evt.target.value, this.props.user);
        }
    }
    
    componentDidMount() {
        this.props.loadMessages();
    }

    render() {
        let { messages } = this.props;

        let msgArr = [];
        
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message
                text={ messages[key].text }
                sender={ messages[key].sender }
                key={ key } />)
        });

        return (
            <div className="dialog-window">
                <span className="dialog-name mb-1"> Test dialog with Bot | Last message - 24/05/2020</span>
                <div className="message-field">
                    { msgArr }
                </div>
                <div className="controls mt-1 message-text">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item style={{ display: 'flex', width: '99%' }}>
                            <TextField
                                name="input" 
                                id="message-input" 
                                label="With a grid"
                                hintText="Write your message"
                                style={ { fontSize: '22px', fontFamily: 'Montserrat', width: '100%' } }
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
        );
    } 
}

const mapStateToProps = ({ msgReducer, profileReducer }) => ({
    messages: msgReducer.messages,
    user: profileReducer.user
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);