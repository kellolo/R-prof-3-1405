import React from 'react';

import connect from 'react-redux/es/connect/connect';

import { Switch, Route } from "react-router";

import FullScreenWrapper from './components/FullScreenWrapper/FullScreenWrapper.jsx'
import Layout from './components/Layuot/Layout.jsx';


class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    addRoute(key, messagesList) {
        return (
            <Route
                key={ key }
                path={ `/chat/${ key }` }
                render={ () => <Layout respondentId={ key } messages={ messagesList }/> }
                exact
            />
        )
    }

    render() {
        let list = this.props.respondents;
        let arrList = [];
        for (let key in list) {
            arrList.push(this.addRoute(key, list[key].messagesList))
        }
        return (
            <FullScreenWrapper
                respondent={ this.props.respondent }
            >
                <Switch>
                    <Route path='/' render={ () => <Layout/> } exact/>
                    { arrList }
                </Switch>
            </FullScreenWrapper>
        )
    }
}

const mapStateToProps = ({ msgReducer, respondentsReducer }) => ({
    //users: respondentsReducer.users,
    respondent: respondentsReducer.respondent,
    respondents: respondentsReducer.respondents,
});

export default connect(mapStateToProps)(Router)