import React from 'react';

// import { Link } from 'react-router-dom';
import { push } from 'connected-react-router' ;

import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import { connect } from 'react-redux';

import { addChat } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';

import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';


const style = {
    width: 200,
    background: 'rgb(150, 171, 189)',
    borderRadius: 3,
    border: 0,
    outline: 0,
    color: 'white',
    padding: '5px'
  };


class ChatList extends React.Component { 
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
    
    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
                // <Link 
                // className= "text-decoration-none" 
                // to = { `/chat/${ key }/` } 
                // key = { key }>
                /* </Link> */
                    <ListItem 
                    className= "text-light" 
                    hoverColor="#425e6e" 
                    primaryText = { chats[key].title } 
                    leftIcon = { <ContentSend /> }
                    onClick = { () => this.handleNavigate ( `/chat/${ key }`) }/>
        ));
        return (
            <List>
                { chatsArray }

                <ListItem 
                    key = "Add new chat..."
                    leftIcon = { <AddIcon /> }
                    onClick = { this.handleAdd }
                    children = {
                        <TextField 
                            key = "textField"
                            name = "input"
                            hintText = "Add new chat"
                            onChange = { this.handleChange }
                            value = { this.state.input }
                            onKeyUp = { this.handleKeyUp }
                            className = 'inp-new-chat' 
                            style={ style }
                        /> 
                    }
                />
            </List>
        )
    }
 }

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);