import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Profile from './components/Profile/index.jsx'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Layout} exact/>
        <Route
          path='/chat/:id'
          render={(obj) => <Layout roomId={Number(obj.match.params.id)}/>}
          exact
        />
        <Route path='/profile/' component={Profile} exact/>
      </Switch>
    )
  }
}

