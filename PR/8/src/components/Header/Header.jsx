import React from 'react';
import PropTypes from 'prop-types';

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
                <h1> Chat Room { this.props.chatId } </h1>
            </div>
        )
    };
};