import React, { Component } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import './style.css';

import Message from '../Message/Message.jsx';
import ContactList from '../ContactList/ContactList.jsx';

import { sendMessage } from '../../store/actions/message_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            text: '',
        }
    }

    handleSend = (text, sender) => {
        this.setState({text: ''});
        if (sender == this.state.user) {
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
        evt.keyCode !== 13 ? 
            this.setState({ text: evt.target.value }) 
            : this.handleSend(this.state.text, this.state.user);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (!this.state.messages[this.state.messages.length - 2].user && this.state.messages.length - prevState.messages.length == 1) { 
    //         setTimeout(() => {
    //             this.setState({
    //                 messages: [...this.state.messages, { 
    //                     user: null, 
    //                     text: 'Ok'
    //                 }] 
    //             })   
    //         }, 1000);
    //     }
    // }

    render() {
        let { messages } = this.props;

        let msgArr = [];

        Object.keys(messages).forEach(key => {
            msgArr.push (<Message
                text = { messages[key].text }
                sender = { messages[key].user }
                key = { key }/>);
        });

        return (<div className="d-flex flex-column msg-field">
                    <div className = "messages">
                        { msgArr }
                    </div>
                    <hr/>
                    <div className="controls" style={ { width: '100%', display: 'flex' } }>
                        <TextField
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            underlineFocusStyle={ { borderColor: '#008879' } }
                            style={ { fontSize: '22px' } }
                            onChange={ this.handleChange }
                            onKeyUp={ this.handleChange }
                            value={ this.state.text }
                        />
                       <FloatingActionButton
                            backgroundColor="#008879"
                            onClick={ () => this.handleSend(this.state.user, this.state.text) }>
                            <SendIcon />
                        </FloatingActionButton>
                    </div>
                    <div>
                        <ContactList />
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