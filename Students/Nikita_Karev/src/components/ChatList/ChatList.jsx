import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import { List, ListItem } from 'material-ui/List';
import { TextField } from '@material-ui/core';
import AddIcon from 'material-ui/svg-icons/content/add';
// import ContentSend from 'material-ui/svg-icons/content/send';

import { addChat } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class ChatList extends React.Component {
    state = {
        input: ''
    }

    handleAdd = () => {
        if (this.state.input) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value })
        // this.setState({ text: value });
    }

    handleKeyUp = evt => {
        if (evt.keyCode == 13) this.handleAdd();
    }

    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
            <Link to = { `/chat/${ key }/` } key={ key } style={ { textDecoration: 'none' } }>
                <ListItem className="dialog-list-item mb-1"
                    style={ { color: '#fff' } }
                    primaryText={ chats[key].title }
                    leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}                        
                    rightIcon={<ChatIcon className="dialog-icon" />}
                    hoverColor="#3e4b5e"
                />
            </Link>
        ));
        return(
            <div className="dialog-main-list">
                <List className="dialog-list" >
                    <span className="dialog-name mb-1">Chat List:</span>
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
                                onKeyUp = { this.handleKeyUp }
                                value = { this.state.input }
                            />
                        }
                    />
                </List>
            </div>
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);