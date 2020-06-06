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

    newStoryLine(id) {
        this.props.newStoryLine(id, 1, null, `Это начало истории ваших личных сообщений с ${ this.props.contacts[id].name } ${ this.props.contacts[id].surname } !`)
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
            if (this.props.messages[id]) {
                routerList.push(this.addRoute(user, id, messages[id]));
            } else {
                this.newStoryLine(id)
                routerList.push(this.addRoute(user, id, messages[id]));
            }
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
    return bindActionCreators({ newStoryLine, sendMessage, loadMessenger, loadMessages }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Router)