import React from 'react';

import connect from 'react-redux/es/connect/connect';

import { Switch, Route } from "react-router";

import FullScreenWrapper from './components/FullScreenWrapper/FullScreenWrapper.jsx'
import { bindActionCreators } from "redux";

import Auth from './components/Auth/Auth.jsx'

import Layout from './components/Layuot/Layout.jsx';
import { loadMessenger } from './store/action/messenger';
import { loadMessages, sendMessage } from './store/action/messages';


class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
        };
        this.login = this.login.bind(this);
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

    login() {
        this.setState({
            auth: true,
        })
    }

    getMessages(user, respondentId, messages) {
        let messagesArray = {};
        for (let key in messages) {
            if (
                messages[key].user !== 'Bot' && messages[key].respondentId === user.id && messages[key].userId === respondentId
                || messages[key].user !== 'Bot' && messages[key].respondentId === respondentId && messages[key].userId === user.id
            ) {
                messagesArray[key] = {
                    user: messages[key].user,
                    text: messages[key].text,
                }
            }
        }
        return messagesArray
    }

    render() {
        if (!this.state.auth) {
            return (
                <Auth auth={ this.login } contacts={ this.props.contacts }/>
            )
        } else {
            const { contacts, messages, respondents, respondent, user } = this.props;
            let routerList = [];
            for (let key in respondents) {
                let respondentId = respondents[+key];
                routerList.push(this.addRoute(user, respondentId, this.getMessages(user, respondentId, messages)));
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
        sendMessage,
        loadMessenger,
        loadMessages,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Router)