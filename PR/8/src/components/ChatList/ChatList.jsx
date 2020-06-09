import React from 'react';

import { Link } from 'react-router-dom';

import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import { connect } from 'react-redux';

import { addChat, loadChats } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';

import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';


class ChatList extends React.Component { 
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

    handleKeyUp = evt => {
        if (evt.keyCode == 13) this.handleAdd();
    }

    componentDidMount() {
        this.props.loadChats()
    }

    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
                <Link to = { `/chat/${ key }/` } key = { key }>
                    <ListItem primaryText = { chats[key].title } leftIcon = { <ContentSend /> }/>
                </Link>
        ));
        return (
            <List>
                { chatsArray }

                <ListItem 
                    key = "Add new chat..."
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
        )
    }
 }

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);