import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';

class Router extends Component {
    render() {
        let RouteArr = [];
        let { chats } = this.props;
        Object.keys(chats).map(key => {
            RouteArr.push(
                <Route key = {shortid.generate()} path = { `/chat/${ key }` } render = { () => <App chatId = { key } /> } exact />
            )
        })
        return (
            <Switch>
                <Route path = '/' component = { App } exact />
                {RouteArr}
                <Route path = '/profile' component = { UserProfile } exact />
            </Switch>
        )
        
    }
}

const mapStateToProps = ({ chtReducer }) => ({ 
    chats: chtReducer.chats
});

 const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Router);
