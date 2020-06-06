import React from "react";
import { Switch, Route } from "react-router-dom";

import connect from 'react-redux/es/connect/connect';

import Layout from "./components/Layout/Layout.jsx";
import Profile from "./components/Profile/Profile.jsx";

class Router extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { chats } = this.props;
    let routesArray = Object.keys(chats).map(key => (
      <Route path = { `/chat/${ key }/` } render = { () => <Layout chatId = { key } /> } key = { key } exact/>
    ))
    return (
      <Switch>
        <Route path="/" component={ Layout } exact />
        {/* <Route path="/chat/:chatId" component={ Layout }/> */}
        { routesArray }
        <Route path="/profile" component={ Profile } />
      </Switch>
    );
  }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);