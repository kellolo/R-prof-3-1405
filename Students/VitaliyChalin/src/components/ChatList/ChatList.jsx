import React from 'react';

import { addChat } from '../../store/actions/chats_actions.js';
import { addProfile } from '../../store/actions/profiles_actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { push } from 'connected-react-router';

import {List, ListItem} from 'material-ui/List';
import { TextField } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import './style.css';
import Profile from '../Profile/Profile.jsx';

const styles = {
    inputField: {
        color: '#fff',
        fontSize: '1rem'
    },
    placeholder: {
        color: '#757575',
        fontWeight: '400'
    }
};

class ChatList extends React.Component {
    static propTypes = {
        push: PropTypes.func.isRequired
    }

    state = {
        input: ''
    }

    handleAdd = () => {
        if(this.state.input) {
            
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    }

    handleChange = (evt) => {
        if(evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp = (evt) => {
        if(evt.keyCode == 13) this.handleAdd();
    }

    handleNavigate = (link) => {
        this.props.push(link);
    }

    componentDidUpdate(prevProps) {
        
        let prevLen = Object.keys(prevProps.chats).length;
        let thisLen = Object.keys(this.props.chats).length;

        if(thisLen > prevLen) {
            this.props.addProfile(thisLen, this.props.chats[thisLen].title);
        }
    }

    render() {        
        
        let { chats, profiles, widthCont } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
            <ListItem className="user__wrapper"
                key={ key }
                className={ (this.props.chatId === key) ? 'active' : '' }
                style={ { color: '#fff' } }
                primaryText={ chats[key].title }
                leftAvatar={
                    <Avatar 
                        src="https://via.placeholder.com/128"
                        className="user__avatar"
                    />
                }
                rightIcon={<CommunicationChatBubble />}
                hoverColor="#41506d"
                onClick={ () => this.handleNavigate(`/chat/${ key }/`) }
            />
        ));
                
        return (
            <div className="users__wrapper" style={ { width: widthCont } }>
                <List className="users__list" >
                    { chatsArray }
                </List>
                <div className="users__control">
                    <TextField
                        className="user__input"
                        name="input"
                        fullWidth={ true }
                        hintText="Введите имя пользователя"
                        hintStyle={ styles.placeholder }
                        underlineFocusStyle={ { borderColor: '#41506d' } }
                        inputStyle={ styles.inputField }
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleKeyUp }
                        value={ this.state.input }
                    />
                    <FlatButton
                        className="user__add"
                        label="Add Chat"
                        fullWidth={ true }
                        backgroundColor="#41506d"
                        hoverColor="#78a1fe"
                        onClick={ this.handleAdd }
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatsReducer, profileReducer }) => ({
    chats: chatsReducer.chats,
    profiles: profileReducer.profiles
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, addProfile, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);