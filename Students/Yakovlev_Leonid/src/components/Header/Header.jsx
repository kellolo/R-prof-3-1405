
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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
            <div className="head-mess w-100">
                <span>Chat Room { this.props.chatId }</span>               
            </div>
        );
    }
}