import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import PropTypes from 'prop-types';

import MessageField from './MessageField/MessagesField.jsx';
import ChatList from './ChatList/ChatList.jsx';
import Header from './Header/Header.jsx';

class App extends Component {
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: '1'
    }
    state = { user: 'User1' }

    render() {
        return (
            <div className= "d-flex w-100 h-100 flex-column">
            <Header chatId = {this.props.chatId} />
                <div className= "content d-flex w-100">
                    <ChatList />
                    <MessageField user= {this.state.user} chatId = { this.props.chatId } />
                </div>
            </div>
        )
        
    }   
}

export default App;