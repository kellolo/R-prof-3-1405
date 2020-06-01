import React from 'react';

import connect from 'react-redux/es/connect/connect';

import { Switch, Route } from "react-router";

import FullScreenWrapper from './components/FullScreenWrapper/FullScreenWrapper.jsx'
import Layout from './components/Layuot/Layout.jsx';


class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.users;
        let arrList = list.map((key, i) => {
            return (
                <Route
                    key={ i }
                    path={ `/chat/${ i }` }
                    render={ () => <Layout chatId={ i }/> } exact/>
            )
        });
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

const mapStateToProps = ({ msgReducer }) => ({
    users: msgReducer.users,
    respondent: msgReducer.respondent,
});

export default connect(mapStateToProps)(Router)