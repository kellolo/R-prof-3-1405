//container
import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx';
import './style.css';

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

    handleSend = (text, sender) => {
        this.setState({text: ''});
        if (sender == 'Me') {
            this.sendMessage(text, sender)
        }
    }

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        //вызов Action
        this.props.sendMessage(messageId, sender, text);
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ text: evt.target.value })
    }

    componentDidMount() {
        this.props.loadMessages();
    }

    render() {
        let { messages } = this.props;

        let msgArr = []
        
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message 
                text={ messages[key].text } 
                sender={ messages[key].user } 
                key = { key }/>);
        });

        return (<div className="d-flex flex-column messageField-block w-100">
                    <div className="msg-box">
                        { msgArr }
                    </div>
                    <hr/>
                    <div className="controls d-flex w-100">
                        <input 
                            type="text" 
                            className="w-75 messageField"
                            onChange={ this.handleChange }
                            onKeyUp = { this.handleChange }
                            value={ this.state.text }
                        />
                        <button className="w-25 ml-3" onClick={ () => this.handleSend(this.state.text, 'Me') }>Отправить</button>
                    </div>
                </div>)
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);