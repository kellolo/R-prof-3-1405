
import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import './style.css'

import { sendMessage } from '../../store/actions/messages_actions.js';
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
        this.setState({ text: '' });
        if (sender == 'Me') {
            this.sendMessage(text, sender)
        }
    }
    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        
        this.props.sendMessage(messageId, sender, text)
    }
    handleChange = (evt) => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value })
        }
    }

    render() {

        let { messages } = this.props;        
        let msgArr = [];
        Object.keys(messages).forEach(key => {
            msgArr.push(<Message
                text={messages[key].text}
                sender={messages[key].user}
                key={key} 
                />);
        });
        return (<div className="d-flex flex-column msgPosition">
            <div>
                {msgArr}
            </div>
            <hr />
            <div className="controls d-flex w-100">
                <TextField                    
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={this.handleChange}
                    onKeyUp={this.handleChange}
                    value={this.state.text}
                />
                <FloatingActionButton className="ml-3" onClick={() => this.handleSend(this.state.text, 'Me')}>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        </div>)
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField)