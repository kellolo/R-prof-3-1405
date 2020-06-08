import React from 'react';
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };

    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1, 2]},
            2: {title: 'Чат 2', messageList: []},
            3: {title: 'Чат 3', messageList: []},
        },
        messages: {
            1: { text: "Привет!", sender: 'bot' },
            2: { text: "Здравствуйте!", sender: 'bot' },
        },
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (Object.keys(prevState.messages).length < Object.keys(this.state.messages).length &&
            this.state.messages[Object.keys(this.state.messages).length].sender === 'me') {
            setTimeout(() => this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 5000);
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(message, 'me')
        }
    };

    handleSendMessage = (message, sender) => {
       const { messages, chats, input } = this.state;
       const { chatId } = this.props;

       if (input.length > 0 || sender === 'bot') {
           const messageId = Object.keys(messages).length + 1;
           this.setState({
               messages: {...messages,
                   [messageId]: {text: message, sender: sender}},
               chats: {...chats,
                   [chatId]: { ...chats[chatId],
                       messageList: [...chats[chatId]['messageList'], messageId]
                   }
               },
           })
       }
       if (sender === 'me') {
           this.setState({ input: '' })
       }
   };

    render() {
        const { chats, messages } = this.state;
        const { chatId } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        ));

        return [
            <div key='message-field' className="message-field">
                { messageElements }
            </div>,
            <div key='text-field' style={ { width: '100%', display: 'flex' } }>
                <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                />
                <FloatingActionButton onClick={ () => this.sendMessage(this.state.input, 'me') }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        ]
    }
}