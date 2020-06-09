import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

import Header from '../Header/index.jsx';
import MessageField from '../MessageField/index.jsx';
import ChatList from '../ChatList/index.jsx';

import { loadProfile } from '../../store/actions/profile_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { goBack } from 'connected-react-router';

import CloseIcon from '@material-ui/icons/Close';

class Profile extends Component {    
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: 'Profile'
    }

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        let { profiles } = this.props;

        return (
            <div className="d-flex w-100 justify-content-center messenger-layout">
                <div className="d-flex flex-column w-100 messenger-wrapper">
                    <Header chatId = { this.props.chatId } />
                    <div className="d-flex">
                        <ChatList active = { this.props.chatId } />                      
                        <div className="d-flex w-75 messenger-profile">
                            <div className="profile">                        
                                <ul className="profile-list">
                                    <li><strong>Имя: </strong>{ profiles[1].userName }</li>
                                    <li><strong>Статус: </strong>{ profiles[1].status }</li>                            
                                    <li><strong>Телефон: </strong>{ profiles[1].phone }</li>  
                                </ul>
                                <div className="profile-close" onClick={ () => this.props.goBack() }>
                                    <CloseIcon style={ { color: 'lightskyblue' } } />                                
                                </div>
                            </div>                          
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

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile, goBack }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);