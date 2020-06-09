import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: '1'
    }
    render() {
        return (            
            <div className="text-center w-100 header">
                <Link to="/profile/">
                    <button className="button profile-btn">
                        <MenuIcon />
                    </button>
                </Link>
                <h1 className="text-light header-name">Chat Room {
                    this.props.chatId
                }</h1>
                
            </div>
        );
    }

}

