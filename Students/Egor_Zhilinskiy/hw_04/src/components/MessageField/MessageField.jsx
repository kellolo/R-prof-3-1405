import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
import Message from '../Message/Message.jsx';
import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import './style.css'

class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        };
    }


    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;

        this.props.sendMessage(messageId, sender, text);
    }

    handleSend = (text, sender) => {
        this.setState({ text: '' });
        if (sender == 'Me') {
            this.sendMessage(text, sender)
        }
    }

    handleChange = (evt) => {
        evt.keyCode !== 13 ?
            this.setState({ text: evt.target.value }) :
            this.handleSend(this.state.text, 'Me')
    }

    componentDidUpdate() {
        // let msgs = this.state.messages;
        // if (msgs.length % 2 === 1) { 
        //     setTimeout(() => {
        //         this.setState({
        //             messages: [...this.state.messages, {
        //                 text: 'Bot, answers',
        //                 user: 'Bot'
        //             }]
        //         });
        //     }, 1000)
        // }
    }



    render() {

        let { messages } = this.props;

        let msgArr = [];
        Object.keys(messages).forEach(key => {
            msgArr.push(<Message
                text={messages[key].text}
                sender={messages[key].user}
                key={key} />)
        });


        return (<div id ='msg-wrapper'>
            <div className="message-field">
                {msgArr}
            </div>
            <hr />
            <div className="controls d-flex w-100">
                <TextField
                    autoFocus
                    id="standard-basic" label="Введите сообщение"
                    fullWidth
                    // type="text" className="w-75"
                    onChange={this.handleChange}
                    onKeyUp={this.handleChange}
                    value={this.state.text}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleSend(this.state.text, 'Me')}                
                >
                    Send
                </Button>
            </div>
        </div>)
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);
