import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

export default class Header extends Component {
    static propTypes = {
        chatId: PropTypes.string,
        chatTitle: PropTypes.string        
    }
    static defaultProps = {
        chatId: 'Main Page',    
        chatTitle: 'Main Page',        
    }    

    render() {
        return (
            <div className="messenger-header w-100 d-flex justify-content-between align-items-center">
                <p>Chat Room { this.props.chatTitle }</p>
                <Link to = "/profile/"><PersonOutlineIcon style={ { color: '#ffffff' } } /></Link>                
            </div>
        );
    }
}