import React from 'react';

import MessageField from '../MessageField/MessageField.jsx'
import Header from '../Header/Header.jsx'
import ChatList from '../ChatList/ChatList.jsx'

import PropTypes from 'prop-types'

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: '1'
    }

    render() {
        return (
                <div>
                    <Header chatId = { this.props.chatId }/>
                    <div className="d-flex content">
                        <ChatList />
                        <MessageField chatId = { this.props.chatId }/>
                    </div>
                </div>
        )
    }
}     