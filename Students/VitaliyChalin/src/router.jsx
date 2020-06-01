import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Router extends React.Component {

    render() {
        let { chats } = this.props;

        let routesArray = Object.keys(chats).map(key => (
            <Route 
                key={ key }
                exact
                path={ `/chat/${ key }/` }
                render={ (props) => <Layout
                                        chatId={ key }
                                        userName={ chats[key].title }
                                    />
                }
            />
        ));

        let routesProfileArray = Object.keys(chats).map(key => (
            <Route 
                key={ key }
                exact
                path={ `/chat/${ key }/profile/` }
                render={ (props) => <Layout
                                        chatId={ key }
                                        userName={ chats[key].title }
                                        pathCode={ 'profile' }
                                    />
                }
            />
        ));
                
        return(
            <Switch>
                <Route exact path = '/'
                    render={ (props) => <Layout chatId={ '' } userName={ props.location.userName } /> }
                />
                { routesArray }
                <Route exact path = '/profile/'
                    render={ () => <Layout
                                        chatId={ 'me' }
                                        userName={ 'Me' }
                                        pathCode={ 'profile' }
                                    /> }
                />
                { routesProfileArray }
            </Switch>
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);