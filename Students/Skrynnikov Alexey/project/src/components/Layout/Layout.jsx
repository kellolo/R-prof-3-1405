import React from 'react';

import MessagesField from '../MessagesField/MessagesField.jsx';
import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';

import './style.css';

import PropTypes from 'prop-types';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    static defaultProps = {
        chatId: '1'
    };

    render() {
        return (
            <div className = 'globalWrapper'>
                <Header chatId = { this.props.chatName }/>
                <div className="d-flex w-100 wrapper">
                        <ChatList />
                        <MessagesField chatId = { this.props.chatId } />
                </div>
            </div>
        )
    }
};