import React, { Component } from 'react';
// import ReactDom from 'react-dom';

// styles

import './style.css';

// components

import Message from '../Message/Message.jsx';

// @material-ui

import { Send, AttachFile } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import { IconButton, TextField, Button } from '@material-ui/core';

// redux 

import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';


class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    handleSend = (text, sender) => { // Отслеживание события отправки сообщения
       this.setState({
           text: '',
        })
           if(sender == 'Me') {
                this.sendMessage(text, sender);
           } 
    }

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        // action call
            if(text == '') { // проверка на пустую строку
                return false 
            } else {
                this.props.sendMessage(messageId, sender, text)
            }

    }

    handleChange = (evt) => { // Отправка нажатием на Enter
        evt.keyCode !== 13 ? 
        this.setState({ 
            text: evt.target.value
         }) : this.handleSend(this.state.text, 'Me')

    }

    componentDidUpdate() { // Апдейт компонента 

         setTimeout(() => {

          }, 2000)
    }

    

    render() {
         
        let { messages } = this.props;


        let msgArr = [];

        Object.keys(messages).forEach(key => {
            msgArr.push (<Message 
                text={ messages[key].text } 
                sender={ messages[key].user } 
                key={ key } />);
                console.log(msgArr)
        })
            
        

        return (
            <div className="d-flex container flex-column w-100">
                <div className="d-flex flex-column messagesField overflow-auto w-100">
                    { msgArr }    
                </div>
                <hr/>
                <div className="d-flex w-75">
                    <Button>
                        <AttachFile style={{
                            display: 'flex',
                            alignSelf: 'center'
                            }} 
                        />
                    </Button>
                    <Button>
                        <MicIcon style={{
                            display: 'flex',
                            alignSelf: 'center'
                            }}
                        />
                    </Button>
                        <TextField
                            id="input-message"
                            size="small"
                            variant="outlined"
                            style={{
                                backgroundColor: 'white',
                            }}
                            fullWidth
                            label="Type your message"
                            onChange={this.handleChange }
                            onKeyUp={this.handleChange } 
                            value={ this.state.text }
                        />
                            <IconButton
                                id="sendButton"
                                color="primary"
                                onClick={ () => this.handleSend(this.state.text, 'Me') }>
                                    <Send />
                            </IconButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);