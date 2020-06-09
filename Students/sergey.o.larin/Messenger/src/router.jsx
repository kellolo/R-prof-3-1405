import React from 'react';

import connect from 'react-redux/es/connect/connect';

import { Switch, Route } from "react-router";

import FullScreenWrapper from './components/FullScreenWrapper/FullScreenWrapper.jsx'
import { bindActionCreators } from "redux";

import Layout from './components/Layuot/Layout.jsx';
import { loadMessenger } from './store/action/messenger';
import { newStoryLine, loadMessages, sendMessage } from './store/action/messages';


class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadMessenger();
        this.props.loadMessages();
    }

    addRoute(user, id, messages) {
        return (
            <Route
                key={ id }
                path={ `/chat/${ id }` }
                render={ () => <Layout user={ user } id={ id } messages={ messages }/> }
                exact
            />
        )
    }

    render() {
        const { contacts, messages, respondents, respondent, user } = this.props;
        let routerList = [];
        for (let key in respondents) {
            let id = respondents[+key];
            routerList.push(this.addRoute(user, id, messages[id]));
        }

        return (
            <FullScreenWrapper
                respondent={ respondent === '' ? '' : contacts[respondent].name }
            >
                <Switch>
                    <Route path='/' render={ () =>
                        <Layout user={ user } id={ '' } messages={ '' }/> } exact
                    />
                    { routerList }
                </Switch>
            </FullScreenWrapper>
        )
    }
}

const mapStateToProps = ({ messengerReducer, messagesReducer }) => ({
    contacts: messengerReducer.contacts,
    messages: messagesReducer.messages,
    respondent: messengerReducer.respondent,
    respondents: messengerReducer.respondents,
    user: messengerReducer.user,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        newStoryLine,
        sendMessage,
        loadMessenger,
        loadMessages
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Router)