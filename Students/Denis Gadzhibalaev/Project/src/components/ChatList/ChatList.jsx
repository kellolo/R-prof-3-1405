import React from 'react';
import ReactDom from 'react-dom';
import './style.sass';
import shortid from 'shortid';


import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import { TextField, FloatingActionButton } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat } from '../../store/actions/chats_actions.js';

class ChatList extends React.Component {  

    state = {
        inputText: '',
        showEdit: false
    }

    showEditField = () => {
        this.setState ({
            showEdit: !this.state.showEdit
        })
    }

    changeInput = (event, chatId, title) => {   
        if (event.keyCode !== 13) {
            this.setState ({
            inputText: event.target.value
            })
        } else {
            this.addChatToClick(chatId, title)   
            
        }
    }

    addChatToClick = (chatId, title) => {
        if (this.state.inputText) {
            this.setState ({
            inputText: '',
            showEdit: false
            })
        this.props.addChat(chatId, title)    
        }        
    }

    render() { 
        let { chats } = this.props;
        let chatId = Object.keys(chats).length + 1;
        let chatsArr = [];

        Object.keys(chats).map(key => {
            chatsArr.push(
                <div key = {shortid.generate()} className = "chat-list_list-item__wrapper">
                     <Link className = "chat-list_list-link" to ={ `/chat/${key}`} >
                        <ListItem
                                style={ { wordBreak: 'break-all' } }
                                className = "chat-list_list-item"
                                primaryText= {chats[key].title}
                                leftAvatar={<Avatar src="https://placeimg.com/640/480/nature" />}
                                />
                    </Link>
                    <CommunicationChatBubble />
                </div>
            )
        })

        return(
            <div className="chat-list w-25 h-100">
                <List>
                    <div className = "d-flex flex-direction-row ">
                        <Subheader>Chats</Subheader>
                        <button onClick = { () => this.showEditField('showEditName')} className = "user-profile_edit-btn"><AddIcon /></button>
                    </div>
                    {chatsArr}
                </List>
                {this.state.showEdit &&  <div className = "chat-list_input__wrapper d-flex flex-direction-row">
                                                <TextField
                                                        autoFocus
                                                        name = "input"
                                                        value = {this.state.inputName}
                                                        fullWidth ={ true }
                                                        hintText = {!this.state.inputText ? "Enter chat title": ""}
                                                        style={ { fontSize: '16px' } }
                                                        onKeyUp = { () => this.changeInput(event, chatId, this.state.inputText) }
                                                        onChange= { this.changeInput }
                                                />  
                                                <FloatingActionButton onClick={ () => this.addChatToClick(chatId, this.state.inputText) }>
                                                    <AddIcon />
                                                </FloatingActionButton>
                                            </div> }
            </div>
        ) 
    }
}

const mapStateToProps = ({ chtReducer }) => ({ 
    chats: chtReducer.chats
});

 const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
