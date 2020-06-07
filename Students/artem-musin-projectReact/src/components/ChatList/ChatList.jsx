import React from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import { addChat } from '../../store/actions/chats_actions.js';


import { push } from 'connected-react-router';

import { List, ListItem, ListItemText, Avatar, ListItemIcon } from '@material-ui/core';
import { TextField } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';


const addChatStyles = {
    maxWidth: 'auto',
    width: 'auto',
    minWidth: '5em'

}

const addIconStyles = {
    margin: '0',
    minWidth: '35px',
    alignSelf: 'center'
}

const listStyles = {
    textDecoration: 'none',
    maxWidth: 'auto',
    width: '25em',
    minWidth: '5em'
}

const listItemTextStyles = {
    padding: '0.5em 1em'
}

const chatListStyles = {
    padding: '0em 1em',
    color: '#3F3FBF',
}

const avatarStyles = {
    backgroundColor: '#9999ff',
    width: '30px',
    height: '30px',
}

class ChatList extends React.Component {

    state = {
        input: ''
    }


    handleAdd = () => { // Добавление чата в лист
            if (this.state.input) {
                this.props.addChat(this.state.input);
                    this.setState({ input: '' })
            }
     }

    handleChange = (evt) => { 
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value })
    }

    handleKeyUp = (evt) => {
        if (evt.keyCode == 13) this.handleAdd()
    }

    handleNavigate = (link) => {
        this.props.push(link)
    }

    render() {

        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
        
                        <ListItem button
                            style={chatListStyles} 
                            onClick={() => this.handleNavigate(`/chat/${key}`)}
                            key={ key }>
                            <ListItemText
                            style={listItemTextStyles}
                            primary={ chats[key].title }
                            /> 
                                    <Avatar alt={chats[key].title} src='/broken-image.jpg' 
                                        style={avatarStyles}
                                     />
                        </ListItem>
                    
        ))

        return (
                <List component="ul" 
                    style={listStyles}>
                            { chatsArray }
                                <ListItem
                                    key='Add new chat'
                                    alignItems="flex-start"
                                    style={addChatStyles}
                                    onClick={ this.handleAdd }
                                    >
                                        <ListItemIcon style={addIconStyles}>
                                                <AddIcon />
                                            </ListItemIcon>
                                                    <ListItemText>
                                                        <TextField
                                                            style={addChatStyles}
                                                            key='textField'
                                                            name='input'
                                                            hintText='Add new chat...'
                                                            id="input-with-icon-textfield"
                                                            wrap="nowrap"
                                                            onChange={ this.handleChange }
                                                            value={ this.state.input }
                                                            onKeyUp={ this.handleKeyUp }
                                                        />
                                                    </ListItemText>
                                                
                                </ListItem>
          
                </List>
            
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
})

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)