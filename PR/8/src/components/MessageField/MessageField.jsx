//container
import React, { Component } from 'react';

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

    handleSend = (chatId, text, sender) => {
        this.setState({text: ''});
        if (sender == 'Me') {
            this.sendMessage(chatId, text, sender);
        }
    }

    sendMessage = (chatId, text, sender) => {
        this.props.sendMessage(chatId, sender, text);
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ text: evt.target.value })
    }

    componentDidMount() {
        this.props.loadMessages(this.props.chatId);
    }

    render() {
        let { messages, chatId } = this.props;

        let msgArr = []
        
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message 
                text={ messages[key].text } 
                sender={ messages[key].sender } 
                key = { key }/>);
        });

        return (<div className="d-flex flex-column w-50">
                    <div>
                        { msgArr }
                    </div>
                    <hr/>
                    <div className="controls d-flex w-100">
                        <input 
                            type="text" 
                            className="w-75"
                            onChange={ this.handleChange }
                            onKeyUp = { this.handleChange }
                            value={ this.state.text }
                        />
                        <button className="ml-3" onClick={ () => this.handleSend(chatId, this.state.text, 'Me') }>Send</button>
                    </div>
                </div>)
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);