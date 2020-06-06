import React from 'react';

import MessageField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';

import PropTypes from 'prop-types';

export default class Layout extends React.Component {
  // static propTypes = {
  //   chatName: PropTypes.string
  // }
  // static defaultProps = {
  //   chatName: 'Mark Zuckerberg'
  // }

  render() {

    return (
      <div className = 'globalWrapper'>
        <Header chatId = { this.props.chatName } />
        <div className = "d-flex w-100 wrapper">
          <ChatList active = { this.props.chatName } />
          <MessageField noMessages = { this.props.noMessages } botName = {  this.props.chatName } id = { this.props.chatId } />
        </div>
      </div>
    )
  }
}