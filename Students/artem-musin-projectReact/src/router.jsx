import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {addChat} from './store/actions/chats_actions.js';
import connect from 'react-redux/es/connect/connect';


import Auth from './components/Authentification/Auth.jsx'
import Layout from './components/Layout/Layout.jsx';
import Profile from './components/Profile/Profile.jsx';



class Router extends React.Component {

    render() {

        let { chats } = this.props;

        let routesArray = Object.keys(chats).map(key => (
            <Route path={ `/chat/${ key }/` } key={ key }  render={() => <Layout chatTitle={ chats[key].title } />} exact />
        ))

        return (
            <Switch>
                <Route path='/auth/' component={ Auth } exact/>
                <Route path='/' render={() => <Layout chatTitle='Pick room and go!' /> } exact/>
                <Route path='/profile/' component={ Profile } exact />
                { routesArray }
            </Switch>
        )

    }
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
})

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router)