import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

import Header from '../Header/index.jsx';
import MessageField from '../MessageField/index.jsx';
import ChatList from '../ChatList/index.jsx';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.string,
        chatTitle: PropTypes.string        
    }
    static defaultProps = {
        chatId: 'Main Page',
        chatTitle: 'Main Page'        
    }

    render() {
        return (
            <div className="d-flex w-100 justify-content-center messenger-layout">
                <div className="d-flex flex-column w-100 messenger-wrapper">
                    <Header chatTitle = { this.props.chatTitle } />
                    <div className="d-flex">
                        <ChatList active = { this.props.chatId } />                    
                        <MessageField chatId = { this.props.chatId } />                                     
                    </div>
                </div>
            </div>
        );
    }
}  