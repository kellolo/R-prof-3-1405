import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 2
    }

    render() {
        return (
            <div className="header w-100">
                <p>Чат: { this.props.chatId }</p>
            </div>
        );
    }
}