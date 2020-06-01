import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './style.css'

import Header from '../Header/Header.jsx'
import ChatList from '../ChatList/ChatList.jsx'
import MessagesField from '../MessageField/MessageField.jsx'

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: '1'
    }
    
    render() {
        return(
                <div className ="d-flex flex-row-reverse wrapper">
                    <div className="d-flex rooms">
                        <ChatList className = "chat-rooms"/>
                    </div>
                    <div className="opened-chat">
                        <Header chatId = { this.props.chatId}/>
                        <MessagesField user={ this.props.user }/>
                    </div>
                </div>
        )
    }
}