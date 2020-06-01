import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

import AppBar from '@material-ui/core/AppBar';

import './style.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: '1'
    }

    render() {
        return(
            <div className="header">
              <AppBar className="header-appbar"
                  position='relative'
                  style={{ backgroundColor: '#00bcd4' }}>
                    <Link to = "/profile/">
                        <button className = "btn header-profile-btn">
                        <ArrowBackSharpIcon /> 
                        </button>
                    </Link>
                  <h1> Chat Room { this.props.chatId }</h1>
              </AppBar>
            </div>
        )
    };
};