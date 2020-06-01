import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileIcon from 'material-ui/svg-icons/social/person-outline';
import SettingsIcon from 'material-ui/svg-icons/action/power-settings-new';
import SearchIcon from 'material-ui/svg-icons/action/search'

import './header.css';

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.string
  }
  static defaultProps = {
    chatId: 'React 14/05/2020'
  }

  render() {
    return (
      <div className = "header">
        <h1 className = "chatName">{ this.props.chatId }</h1>
        <Link to = "/exit/">
          <button className = "button settingsBtn"> 
            <SettingsIcon color = "grey" hoverColor = "darkgoldenrod" /> 
          </button>
        </Link>
        <Link to = "/profile/">
          <button className = "button profileBtn"> 
            <ProfileIcon color = "grey" hoverColor = "darkgoldenrod" /> 
          </button>
        </Link>
        <Link to = "/p404/">
          <button className = "button searchBtn"> 
            <SearchIcon color = "grey" hoverColor = "darkgoldenrod" /> 
          </button>
        </Link>
      </div>
    )
  };
};