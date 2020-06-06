import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from '../Layout/Layout.jsx';
import Profile from '../Profile/Profile.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Router extends React.Component {
    render() {
        let { chats } = this.props;

        let arrRoutes = Object.keys(chats).map(key => (
            <Route 
                path = { `/chat/${ key }/` } 
                render = { () => <Layout chatId = { key } /> } 
                key = { key } exact
            />
        ));
        
        return (
            <Switch>
                <Route exact path='/' component={ Layout } />
                { arrRoutes }
                <Route
                    exact
                    path='/userprofile/'
                    render={() => <Profile /> }
                />
            </Switch>
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);
