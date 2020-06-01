import React, { Profiler } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Profile from '../Profile/Profile.jsx';
import MessageField from '../MessageField/MessageField.jsx';

import './style.css';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        userName: PropTypes.string,
        pathCode: PropTypes.string
    };
    static defaultProps = {
        chatId: '',
        pathCode: ''
    };

    render() {
        let userName = this.props.userName;
        let pathCode = this.props.pathCode;

        return (
            <div className="layout__wrapper">
                <Header chatId={ this.props.chatId } userName={ userName } />
                { pathCode !== 'profile' && <ChatList chatId={ this.props.chatId } /> }
                { pathCode !== 'profile' && <MessageField chatId={ this.props.chatId } /> }
                { pathCode === 'profile' && <ChatList chatId={ this.props.chatId } widthCont={ '20%' } /> }
                { pathCode === 'profile' && <MessageField chatId={ this.props.chatId } widthCont={ '60%' } /> }
                { pathCode === 'profile' && <Profile chatId={ this.props.chatId } /> }
            </div>
        )
    }
}