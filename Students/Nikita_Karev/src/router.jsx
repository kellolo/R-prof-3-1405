import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Profile from './components/Profile/Profile.jsx';

// import { addChat } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Router extends React.Component {

    render() {
        let { chats } = this.props;

        let routesArray = Object.keys(chats).map(key => (
            <Route path={ `/chat/${ key }/` }  render={() => <Layout chatId={key} />} key={ key } exact />
        ));
        return (
            <Switch>
                {/* <Route path = '/' render = { () => <Profile /> } exact/> */}
                <Route path = '/' render = { () => <Layout /> } exact/>
                { routesArray }
                <Route path = '/profile/' render = { () => <Profile /> } exact />
            </Switch>
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);