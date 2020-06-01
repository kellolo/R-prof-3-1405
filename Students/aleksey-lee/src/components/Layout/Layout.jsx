import React from 'react';
import PropTypes from "prop-types";
import MessagesField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    chatId: PropTypes.string
  };

  static defaultProps = {
    chatId: '1'
  };


  render() {

    let { user } = this.props;

    return (<div className="d-flex flex-wrap w-100 wrapper justify-content-center">
      <div className="col col-12 pt-4 pb-5 header">
        <Header chatId={ this.props.chatId } />
      </div>
      <div className="col col-4 aside">
        <ChatList />
      </div>
      <div className="col col-8 chat">
        <MessagesField user={ user } />
      </div>
    </div>)
  }
}