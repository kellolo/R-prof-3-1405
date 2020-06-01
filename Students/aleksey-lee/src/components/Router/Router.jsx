import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from '../Layout/Layout.jsx';
import Profile from '../Profile/Profile.jsx';


export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Layout } />
                <Route
                    exact
                    path='/chat/:chatId/'
                    render={ obj => {
                        <Layout
                            chatId={ obj.match.params.chatId }
                            chatTitle={ obj.match.params.title }
                        />
                        }
                    }
                />
                <Route
                    exact
                    path='/userprofile/'
                    render={ obj => <Profile
                        userID='1'
                    />
                    }
                />
            </Switch>
        )
    }
}
