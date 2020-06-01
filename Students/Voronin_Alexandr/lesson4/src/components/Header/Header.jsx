import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }

    render() {
        return(
            <div className="d-flex justify-content-between header">
                <h1> Chat Room { this.props.chatId }</h1>
                <Link to = "/profile/">
                    <Avatar>OP</Avatar>
                </Link>
                
            </div>
        )
    };
};
