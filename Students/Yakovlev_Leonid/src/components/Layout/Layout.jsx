import React, { Component } from 'react';

import './style.css';

import Header from '../Header/Header.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';

import PropTypes from 'prop-types';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }
    // constructor(props) {
    //     super(props);
    // }
    render() {       

        return (
            <div className="d-flex w-100 justify-content-center messenger-layout mt-4 mb-4">
                <div className="d-flex flex-column w-100 messenger-wrapper">
                    <Header chatId = { this.props.chatId } />
                    <div className="d-flex justify-content-around">
                        <ChatList />                    
                        <MessageField />                                     
                    </div>
                </div>
            </div>
        );
    }
}