import React from 'react';
import ReactDom from 'react-dom';
import './style.sass';
import shortid from 'shortid';


import { push } from 'connected-react-router';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import { TextField, FloatingActionButton } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import Subheader from 'material-ui/Subheader';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CircularProgress from 'material-ui/CircularProgress';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat, deleteChat, loadChats } from '../../store/actions/chats_actions.js';

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

    handleNavigate = (link) => {
        this.props.push(link);
    };
 
    componentDidMount() {
        this.props.loadChats();
    }

    render() {
        if (this.props.isLoading) {
            return <CircularProgress style = { {margin: 'auto'} }/>
        } 
        let { chats } = this.props;
        let chatId = Object.keys(chats).length + 1;
        let chatsArr = [];

        Object.keys(chats).map(key => {
            chatsArr.push(
                !this.props.chats[key].deleted && <ListItem
                                                        key = {shortid.generate()}
                                                        style={ { wordBreak: 'break-all' } }
                                                        className = "chat-list_list-item"
                                                        primaryText= {chats[key].title}
                                                        leftAvatar={<Avatar src="https://placeimg.com/640/480/nature" />}
                                                        onClick = { () => this.handleNavigate(`/chat/${key}`)}
                                                        rightIconButton = {<HighlightOffIcon className = "delete-btn" style={ { top: '14px', right: '10px' } }
                                                                                            onClick = {  () => {this.props.deleteChat(key)}} 
                                                                                            /> }
                                                    />     
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
    chats: chtReducer.chats,
    isLoading: chtReducer.isLoading
});

 const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat, push, loadChats }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
