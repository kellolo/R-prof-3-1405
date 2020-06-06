import React from 'react';

import MessageField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';

import './style.css';

import PropTypes from 'prop-types';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: '1'
    }
    render() {
        return(
            <div className="layout-wrapper">
                <Header chatId = { this.props.chatId } />
                <ChatList />                
                <MessageField /> 
            </div>
        )
    }
}