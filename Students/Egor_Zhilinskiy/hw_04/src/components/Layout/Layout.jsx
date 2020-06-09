import React,{ Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import MessagesField from '../MessageField/MessageField.jsx';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }
    render() {
        return (
            <div className="layout-wrapper">
                <Header chatId = {this.props.chatId} />
                <ChatList />
                <MessagesField />
            </div>
        )
    }
}
