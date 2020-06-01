import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

import Header from '../Header/index.jsx';
import MessageField from '../MessageField/index.jsx';
import ChatList from '../ChatList/index.jsx';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }

    render() {
        return (
            <div className="d-flex w-100 justify-content-center messenger-layout mt-4 mb-4">
                <div className="d-flex flex-column w-50 messenger-wrapper">
                    <Header chatId = { this.props.chatId } />
                    <div className="d-flex">
                        <ChatList />        
                        <div className="d-flex w-75 messenger-profile">
                            <ul className="profile">
                                <li><strong>Имя: </strong>Vader</li>
                                <li><strong>Статус: </strong>...</li>                            
                                <li><strong>Телефон: </strong>+7 000 000-00-00</li>  
                            </ul>                          
                        </div>            
                    </div>
                </div>
            </div>
        );
    }
}  