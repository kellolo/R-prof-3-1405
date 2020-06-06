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

    handleSend = (text, sender) => {
        this.setState({text: ''});
        if (sender == 'Vader') {
            this.sendMessage(text, sender)
        }
    }

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        this.props.sendMessage(messageId, sender, text);
    }

    handleChange = (evt) => {
        evt.keyCode !== 13 ? 
            this.setState({ text: evt.target.value }) :
            this.handleSend( evt.target.value ,'Vader')
    }

    componentDidMount() {
        this.props.loadMessages();
    }

    render() {
        let { messages } = this.props;

        let messageArray = [];

        Object.keys(messages).forEach(key => {
            messageArray.push (<Message 
                text={ messages[key].text } 
                sender={ messages[key].user } 
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
                        <FloatingActionButton style={ { margin: '10px' } } onClick={ () => this.handleSend(this.state.text, 'Vader') }>
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