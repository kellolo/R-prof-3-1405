import React from 'react';
// import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import './style.css';

import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import { List, ListItem } from 'material-ui/List';
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import ContentSend from 'material-ui/svg-icons/content/send';

import { addChat, loadChats } from '../../store/actions/chats_actions.js';
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
    }

    handleKeyUp = evt => {
        if (evt.keyCode == 13) this.handleAdd();
    }

    handleNavigate = (link) => {
        this.props.push(link);
    };

    componentDidMount() {
        this.props.loadChats();
    };

    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
            <ListItem className="dialog-list-item mb-1"
                style={ { color: '#fff', fontFamily: 'Montserrat' } }
                primaryText={ chats[key].title }
                leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}                        
                rightIcon={<ChatIcon className="dialog-icon" />}
                hoverColor="#3e4b5e"
                onClick={ () => this.handleNavigate(`/chat/${ key }`) }
            />
        ));
        return(
            <div className="dialog-main-list">
                <List className="dialog-list" >
                    <span className="dialog-name mb-1">Chat List:</span>
                    { chatsArray }

                    <ListItem
                        key = "Add new chat..."
                        leftIcon = { <AddCircleIcon style = {{ marginTop: '27px', color: '#000' }}/> }
                        style = {{ width: '70%', borderRadius: '20px', backgroundColor: '#00bcd4', marginLeft: '17%' }}
                        onClick = { this.handleAdd }
                        children = {
                            <TextField
                                key = "textField"
                                name = "input"
                                style = {{ padding: '0', marginTop: '15px', width: '100%' }}
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

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);