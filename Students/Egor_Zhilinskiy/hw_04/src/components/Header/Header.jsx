import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

export default class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }
    render() {
        return (
            <div className="header w-100">
                <p id='header-txt'>Chat Room {this.props.chatId}</p>
            </div>
        )
    };
};