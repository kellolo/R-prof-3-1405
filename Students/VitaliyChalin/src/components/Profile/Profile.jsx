import React from 'react';

import { addProfile } from '../../store/actions/profiles_actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './style.css';

class Profile extends React.Component {

    render () {
        let { profiles } = this.props;
        let chatId = this.props.chatId;
        let ava;

        profiles[ chatId ].avatar ? ava = profiles[ chatId ].avatar : ava = 'https://via.placeholder.com/128';

        return (
            <div className="profile__wrapper" style={ { width: '19.7%' } }>
                <img className="profile__ava" src={ ava } alt={ profiles[ chatId ].userName } />
                <div className="profile__body">
                    <h2 className="profile__name">{ profiles[ chatId ].userName }</h2>
                    <p className="profile__about">{ profiles[ chatId ].bio }</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    profiles: profileReducer.profiles
});

const mapDispatchToProps = dispatch => bindActionCreators({ addProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);