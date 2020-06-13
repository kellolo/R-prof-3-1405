import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import './style.css';

import Message from '../Message/index.jsx';

import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleSend = (chatId, text, sender) => {
        this.setState({text: ''});
        if (sender == 'Vader') {
            this.sendMessage(chatId, text, sender)
        }
    }

    sendMessage = (chatId, text, sender) => {
        this.props.sendMessage(chatId, sender, text);
    }

    handleChange = (evt) => {
        let { chatId } = this.props;           
        evt.keyCode !== 13 ? 
            this.setState({ text: evt.target.value }) :
            this.handleSend(chatId, evt.target.value ,'Vader')
    }

    componentDidMount() {
        this.props.loadMessages(this.props.chatId);
    }

    render() {
        let { messages, chatId } = this.props;      
        let messageArray = [];

        Object.keys(messages).forEach(key => {            
            messageArray.push (<Message 
                text={ messages[key].text }              
                sender={ messages[key].sender }   
                key = { key }/>);                
        });        

        return (<div className="d-flex flex-column w-75 messenger-chat">
                    <div className="messages">                 
                        { messageArray }
                    </div>
                    <div className="controls d-flex w-100 justify-content-between">
                        <TextField
                            type="text" 
                            onChange={ this.handleChange }
                            onKeyUp = { this.handleChange }
                            value={ this.state.text }
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            style={ { fontSize: '1rem', margin: '10px' } }
                        />                  
                        <FloatingActionButton style={ { margin: '10px' } } onClick={ () => this.handleSend(chatId, this.state.text, 'Vader') }>
                            <SendIcon />
                        </FloatingActionButton>
                    </div>
                </div>);
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);