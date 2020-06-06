import React from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import { addChat } from '../../store/actions/chats_actions.js';


import { push } from 'connected-react-router';

import { List, ListItem, ListItemText, Grid, Avatar } from '@material-ui/core';
import { TextField } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';

const inputStyle = {
    maxWidth: '12em',
    
}

const inputBlock = {
    alignSelf: 'center',
    color: 'whitesmoke'
}

const listStyles = {
    textDecoration: 'none'
}

const chatListStyles = {
    padding: '0em 1em',
    color: '#3F3FBF'
}

const avatarStyles = {
    backgroundColor: '#9999ff',
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
        
                        <ListItem button>
                            <ListItemText 
                            style={chatListStyles} 
                            primary={ chats[key].title } 
                            onClick={() => this.handleNavigate(`/chat/${key}`)}
                            /> 
                                    <Avatar alt={chats[key].title} src='/broken-image.jpg' 
                                        style={avatarStyles} />
                        </ListItem>
                    
        ))

        return (
                <List component="nav" 
                    style={listStyles}>
                            { chatsArray }
                                <ListItem
                                    key='Add new chat'
                                    onClick={ this.handleAdd }>
                                        <Grid 
                                            container
                                            item
                                            spacing={1}
                                            direction="row"
                                            >

                                                <Grid item
                                                    style={inputBlock}>
                                                        <AddIcon />
                                                    </Grid>

                                                <Grid item
                                                    >
                                                    <TextField
                                                        key='textField'
                                                        name='input'
                                                        hintText='Add new chat...'
                                                        id="input-with-icon-textfield"
                                                        onChange={ this.handleChange }
                                                        value={ this.state.input }
                                                        onKeyUp={ this.handleKeyUp }
                                                        style={inputStyle}
                                                    />
                                                    </Grid>
                                            
                                        </Grid>
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