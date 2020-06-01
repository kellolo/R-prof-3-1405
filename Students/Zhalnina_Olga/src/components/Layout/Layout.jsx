import React from "react";
import ReactDom from "react-dom";
import "./Layout.css";
//redux
import { Provider } from "react-redux";
import initStore from "../../store/store.js";

import MessagesField from "../MessageField/MessageField.jsx";
import Header from "../Header/Header.jsx";
import ChartList from "../ChatList/ChatList.jsx";

import PropTypes from 'prop-types';

let user = "Me";

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    profile: PropTypes.bool
  }
  static defaultProps = {
    chatId: 1,
    profile: false
  }

  render() {
    return (
      <div className="layout">
        <Header chatId = { this.props.match.params.chatId } profile ={ false }/>
        <ChartList />
        <Provider store={initStore()}>
          <MessagesField user={user} />
        </Provider>
      </div>
    );
  }
}
