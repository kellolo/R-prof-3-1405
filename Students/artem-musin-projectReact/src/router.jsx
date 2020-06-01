import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Profile from './components/Profile/Profile.jsx'


export default class Router extends React.Component {

    render() {

        return (
            <Switch>
                <Route path='/' component={ Layout } exact/>
                <Route path='/profile/' component={ Profile } render={ () => <Profile /> } exact />
                <Route path='/chat/1/'  render={() => <Layout chatId={1} />} exact />
                <Route path='/chat/2/'  render={() => <Layout chatId={2} />} exact />
                <Route path='/chat/3/'  render={() => <Layout chatId={3} />} exact />
                <Route path='/chat/4/'  render={() => <Layout chatId={4} />} exact />
                <Route path='/chat/5/'  render={() => <Layout chatId={5} />} exact />
            </Switch>
        )

    }
}