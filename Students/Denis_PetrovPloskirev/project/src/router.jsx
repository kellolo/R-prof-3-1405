import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
// import { addChat } from '../../store/actions/chats_action.js';
import { bindActionCreators } from 'redux';

import Layout from './components/Layout/Layout.jsx';
import Profile from './components/Profile/Profile.jsx';
import NotPage from './components/404/404.jsx';
class Router extends React.Component {
  render() {

    let { chats } = this.props;
    let routesArray = Object.keys(chats).map(key => (
      <Route path={`/chat/${key}/`} render={() => <Layout chatName={chats[key].title} />} key={key} exact />
    ));
    return (
      <Switch>
        <Route path='/' render={() => <Profile />} exact />
        <Route path='/chats/' render={() => <Layout chatName='Choose chat' />} exact />
        <Route path='/profile/' render={() => <Profile />} exact />
        <Route path='/p404/' render={() => <NotPage type='404' />} exact />
        <Route path='/exit/' render={() => <NotPage type="exit" />} exact />

        {routesArray}
      </Switch>
    )
  }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);