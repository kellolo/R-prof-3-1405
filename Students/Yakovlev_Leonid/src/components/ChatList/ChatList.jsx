
import React, { Component } from 'react';

//import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';

import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import Icon from '@material-ui/core/Icon';

import './style.css';
import { connect } from 'react-redux';

import { addChat } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';

import { TextField } from '@material-ui/core';
import AddIcon from 'material-ui/svg-icons/content/add';


 class ChatList extends Component {         
     state = {
         input: ''
     } 

     handleAdd = () => {
        if (this.state.input) {
            this.props.addChat(this.state.input);
            this.setState({input: ''});
        }
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value })
    }

    handleKeyUp = (evt) => {
        if (evt.keyCode == 13) this.handleAdd();
    }

    handleNavigate = (link) => {
        this.props.push(link);
    }; 

    render() {
        let { chats } = this.props;        

        let chatsArray = Object.keys(chats).map(key => (            
                <ListItem 
                    primaryText = { chats[key].title } 
                    rightIcon = { <Icon color="primary" 
                                        fontSize="small">add_circle
                                        </Icon> } 
                    onClick={ () => this.handleNavigate(`/chat/${ key }`) }
                /> 
                
        ));           

        return (
            <List className = "chatlist">

               { chatsArray }

               <ListItem
                    key =  "Add new chat..."
                    leftIcon = { <AddIcon /> }
                    onClick = { this.handleAdd }
                    children = {
                        <TextField 
                            key = "textField"
                            name = "input"
                            hintText = "Add new chat"
                            onChange = { this.handleChange }
                            value = { this.state.input }
                            onKeyUp = { this.handleKeyUp }
                        />
                    }
               />
            </List>           
        );
    }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);