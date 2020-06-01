import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    profile: PropTypes.bool,
  };
  static defaultProps = {
    chatId: 1,
    profile: false,
  };

  render() {
    return (
      <header className="header">
        {!this.props.profile && (
          <div className="header_link">
            <Link to={`/profile`}>
              <span>Profile</span>
            </Link>
            <h1>Chat {this.props.chatId}</h1>
          </div>
        )}
        {this.props.profile && (
          <div className="header_link">
            <Link to={`/`}>
              <span>Back to chat</span>
            </Link>
            <h1>Профиль</h1>
          </div>
        )}
      </header>
    );
  }
}
