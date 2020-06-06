import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './style.css';

import { connect } from 'react-redux';
import { addChat, loadChats } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';

class ChatList extends Component {
    state = {
        input: ''
    }

    handleAdd = () => {
        if (this.state.input) {
            this.props.addChat(this.state.input);
            this.setState({input: ''});
        }
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value })
    }

    handleKeyUp = evt => {
        if (evt.keyCode == 13) this.handleAdd();
    }

    handleNavigate = (link) => {
        this.props.push(link);
    };

    componentDidMount() {
        this.props.loadChats();
    }

    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
            <li key = { key }
                onClick={ () => this.handleNavigate(`/chat/${ key }/`) }
                className={ this.props.active == key ? "chatname-wrap active" : "chatname-wrap" }
                >
                { chats[key].title }
            </li>                        
            /*<li key = { key }><Link className={ this.props.active == key ? "chatname-wrap active" : "chatname-wrap" } to = { `/chat/${ key }/` } key = { key }>{ chats[key].title }</Link></li>*/            
        ));

        return (
            <div className="d-flex w-25 flex-column messenger-chatlist">
                <ul className="chatlist">
                    { chatsArray } 
                </ul>
                <div className="chatlist-add d-flex justify-content-between">
                    <input
                        type="text"                    
                        key = "textField"
                        name = "input"
                        placeholder = "Add chat"
                        onChange = { this.handleChange }
                        value = { this.state.input }
                        onKeyUp = { this.handleKeyUp }
                    />
                    <div className="chatlist-add_icon">
                        <AddIcon
                            key = "addChat"
                            onClick = { this.handleAdd }
                            color = "#DADADA"
                            hoverColor = "#87cefa"                            
                        />
                    </div>                    
                </div>                
            </div>
        );
    }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, loadChats, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);