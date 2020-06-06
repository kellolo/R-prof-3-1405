import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import './style.css';
import { connect } from 'react-redux';

import { addChat } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { push } from 'connected-react-router';
import AddIcon from 'material-ui/svg-icons/content/add';
import { TextField } from 'material-ui';


const list = "chatList-list";
const item = "item";
const active = "item-active";
const icon = "icon";

class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    }; 
    state = {
        input: ''
    }

    handleAdd = (text, sender) => {
        if (this.state.input) {
            this.props.addChat(this.state.input);
            this.setState({input: ''});
        }
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value })
    }

    handleKeyUp = evt => {
        if (evt.keyCode == 13) this.handleAdd();
    }
    handleNavigate = (link) => {
        this.props.push(link);
    };
 
    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
                <ListItem primaryText = { chats[key].title } key = { key } leftIcon = { <ContentSend className = {icon}/> } className = {item} onClick = { () => this.handleNavigate(`/chat/${ key }/`) }/>
        ))
        return (
                <List className = {list}>
                    { chatsArray }
                <ListItem
                    key = "Add a new chat..."
                    onClick = { this.handleAdd }
                    leftIcon = { <AddIcon /> }
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

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);