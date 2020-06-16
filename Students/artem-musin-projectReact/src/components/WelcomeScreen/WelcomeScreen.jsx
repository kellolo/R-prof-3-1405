import React from 'react';

import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';

import { push } from 'connected-react-router';

class WelcomeScreen extends React.Component { 

    handleNavigate = (link) => {
        this.props.push(link)
    }

    render() {
        return(
            <div>
                <h1>Hello, user</h1>
                <button onClick={() => this.handleNavigate('/chats/')}>
                    go to the chaaaaaats
                </button>
            </div>
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
})

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)