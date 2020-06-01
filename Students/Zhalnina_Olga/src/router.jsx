import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Profile from "./components/Profile/Profile.jsx";

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Layout } exact />
        <Route path="/chat/:chatId" component={ Layout }/>
        <Route path="/profile" component={ Profile } />
        {/* <Route path="/chat/2/" render={() => <Layout chatId={2} />} exact /> */}
      </Switch>
    );
  }
}
