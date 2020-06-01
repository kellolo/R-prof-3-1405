import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

import Header from '../Header/index.jsx';
import MessageField from '../MessageField/index.jsx';
import ChatList from '../ChatList/index.jsx';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }

    render() {
        return (
            <div className="d-flex w-100 justify-content-center messenger-layout mt-4 mb-4">
                <div className="d-flex flex-column w-50 messenger-wrapper">
                    <Header chatId = { this.props.chatId } />
                    <div className="d-flex">
                        <ChatList />                    
                        <MessageField />                                     
                    </div>
                </div>
            </div>
        );
    }
}  