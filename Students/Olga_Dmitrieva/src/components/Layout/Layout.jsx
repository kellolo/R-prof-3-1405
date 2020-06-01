import React from 'react';

import MessageField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';

import PropTypes from 'prop-types';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 2
    }

    render() {
        return (
            <div className="justify-content-center w-100">
                <div className="d-flex w-100 justify-content-center">
                    <Header chatId = { this.props.chatId }/>
                </div>
                <div className="d-flex justify-content-center w-100">
                    <div className="d-flex w-100 justify-content-center">
                        <div className="d-flex chatList-block w-25">
                            <ChatList />
                        </div>
                        <div className="d-flex chatList-block w-75">
                            <MessageField />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}