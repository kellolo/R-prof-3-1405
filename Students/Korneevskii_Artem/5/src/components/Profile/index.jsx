import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

import Header from '../Header/index.jsx';
import MessageField from '../MessageField/index.jsx';
import ChatList from '../ChatList/index.jsx';

import { viewProfile } from '../../store/actions/profile_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Profile extends Component {    
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: 'Profile'
    }

    render() {
        let { profiles } = this.props;

        return (
            <div className="d-flex w-100 justify-content-center messenger-layout mt-4 mb-4">
                <div className="d-flex flex-column w-50 messenger-wrapper">
                    <Header chatId = { this.props.chatId } />
                    <div className="d-flex">
                        <ChatList />        
                        <div className="d-flex w-75 messenger-profile">
                            <ul className="profile">
                                <li><strong>Имя: </strong>{ profiles[1].userName }</li>
                                <li><strong>Статус: </strong>{ profiles[1].status }</li>                            
                                <li><strong>Телефон: </strong>{ profiles[1].phone }</li>  
                            </ul>                          
                        </div>            
                    </div>
                </div>
            </div>
        );
    }
}  

const mapStateToProps = ({ profileReducer }) => ({
    profiles: profileReducer.profiles
});

const mapDispatchToProps = dispatch => bindActionCreators({ viewProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);