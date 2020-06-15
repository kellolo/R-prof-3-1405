import React  from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';

class Router extends React.Component {
    render() {
        let { chats } = this.props;
        let RouteArr = Object.keys(chats).map(key => 
                <Route  key = { key } 
                        exact 
                        path = { `/chats/${ key }` } 
                        render = { () => <App chatId = { key }  /> } /> 
        );
        return (
            <Switch>
                <Route path = '/' component = { App } exact />
                { RouteArr }
                <Route path = '/profile' component = { UserProfile } exact />
            </Switch>
            
        )
        
    }
}

const mapStateToProps = ({ chtReducer }) => ({ 
    chats: chtReducer.chats
});

 const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Router);
