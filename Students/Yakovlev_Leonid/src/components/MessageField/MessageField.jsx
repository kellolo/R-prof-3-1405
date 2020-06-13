//container
import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './style.css';

import Message from '../Message/Message.jsx';

import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import ContentSend from 'material-ui/svg-icons/content/send';




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
        this.props.loadMessages()
    }

    render() {
        // let { user } = this.props;
        let { messages } = this.props;

        let msgArr = []
        
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message 
                text={ messages[key].text } 
                sender={ messages[key].user } 
                key = { key }/>);
        });


        return (<div className="d-flex flex-column chat-text">
                    <div className="d-flex flex-column mass-text">
                        { msgArr }
                    </div>                    
                    <div className="controls d-flex w-100  enter-text">
                        {/* <input 
                            type="text" 
                            className="w-75 inputText"
                            onChange={ this.handleChange }
                            onKeyUp = { this.handleChange }
                            value={ this.state.text }
                        />    */}
                        <TextField
                            type="text" 
                            className="w-75"
                            onChange={ this.handleChange }
                            onKeyUp = { this.handleChange }
                            value={ this.state.text }
                            id="standard-textarea"
                            label="Введите сообщение"
                            placeholder="Ваше сообщение"
                            multiline                                
                        />                   
                        <Button  
                            className="ml-3 button-text" 
                            onClick={ () => this.handleSend(this.state.text, 'Me') } 
                            variant="outlined">
                            <ContentSend />
                        </Button>                                                
                    </div>
                </div>)
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);