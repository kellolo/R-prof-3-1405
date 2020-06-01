import React from 'react';
import ReactDom from 'react-dom';
import shortid from 'shortid';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import './style.sass';

import Message from '../Message/Message.jsx';

import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessagesField extends React.Component {
    constructor(props) {
        super(props);
        this.messagesFieldContainer = React.createRef();
        this.focusTextInput = React.createRef();
        this.state = {
            inputText: '',
        }
    }

    changeInputText = (text, sender) => {
        if (event.keyCode !== 13) {
            this.setState({ inputText: event.target.value }) 
            } else {
                this.setState ({inputText: ''});
                this.sendMessage(text, sender)
            }
        
    }

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        if (text) {
            this.props.sendMessage(messageId, sender, text);
        }    
    }

    handleSend = (text, sender) => {
        if (this.state.inputText) {
             this.setState ({inputText: ''});
            if (sender == this.props.user) {
                this.sendMessage(text, sender)
            }
        }
    }
     
    focusMessageInput = () => {
        this.focusTextInput.current.focus();
    }

    scrollChat = (msgLenght) => {
        if (msgLenght) {
            this.messagesFieldContainer.current.scrollTop = this.messagesFieldContainer.current.scrollHeight;
            }   
    }

    componentDidUpdate(prevProps, prevState) {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        const userSendLastMessage = messages[Object.keys(messages).length].user;
        const messagesLenghtIncreased = Object.keys(messages).length > Object.keys(prevProps.messages).length;
        this.focusMessageInput();
        this.scrollChat(messagesLenghtIncreased);
        if ( userSendLastMessage && messagesLenghtIncreased) {
                setTimeout(() => {
                    this.props.sendMessage(messageId, null, '');
                }, 2000);
            }
        
    }

    render() {
        let { messages } = this.props;
        const messagesArr = [];
        Object.keys(messages).map(key => {
            messagesArr.push(<Message key={ shortid.generate() } 
                                      sender={ messages[key].user } 
                                      text={ messages[key].text } />)
        });

        return (
        <div  className= "message-field_container d-flex flex-column w-75 h-100">
            <div ref={this.messagesFieldContainer} className = "message-field d-flex flex-column">
                {messagesArr} 
            </div>

            <div className= "controls d-flex w-100 align-items-center justify-content-center">
            <TextField
                   name="input"
                   autoFocus
                   ref={ this.focusTextInput }
                   disabled = { (messages[Object.keys(messages).length].user ) ? true : false}
                   fullWidth={ true }
                   hintText="Enter Message"
                   style={ { fontSize: '22px' } }
                   onChange= {this.changeInputText}
                   value={ this.state.inputText }
                   onKeyUp={ () => this.changeInputText(this.state.inputText, this.props.user) }
               />
               <FloatingActionButton onClick={ () => this.handleSend(this.state.inputText, this.props.userName) }>
                   <SendIcon />
               </FloatingActionButton>
            </div> 
        </div>
        )
    }
}

const mapStateToProps = ({ msgReducer, prfReducer }) => ({
    messages: msgReducer.messages,
    user: prfReducer.userName
});

const mapDispathToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(MessagesField);