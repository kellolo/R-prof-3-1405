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
        chatId: 1
    }

    render() {
        return (
            <div className="d-flex justify-content-center w-100">
                <div className="d-flex w-100 justify-content-center">
                    <Header chatId = { this.props.chatId }/>
                    <div className="pr-5">
                        <ChatList />
                    </div>
                    <div>
                        <MessageField />
                    </div>
                </div>
            </div>
        )
    }
}