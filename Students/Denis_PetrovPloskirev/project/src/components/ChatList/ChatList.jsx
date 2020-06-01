import React from 'react';

import './ChatList.css';

import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/social/sentiment-satisfied';
import AvatarBad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import AvatarThree from 'material-ui/svg-icons/social//sentiment-very-dissatisfied';
import AvatarFour from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import DeleteIcon from 'material-ui/svg-icons/navigation/cancel';
import {TextField} from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';

import { connect } from 'react-redux';
import { addChat } from '../../store/actions/chats_actions.js';
import { deleteChat } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';

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
    if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value });
}

handleKeyUp = evt => {
    if (evt.keyCode == 13) this.handleAdd();
}

deleteChat = (e) => {
  e.stopPropagation();
  e.preventDefault();
  let id = e.nativeEvent.target.dataset.id ? e.nativeEvent.target.dataset.id : e.nativeEvent.target.parentElement.dataset.id
  this.props.deleteChat(id);
}

  render() {
    let { chats } = this.props;
    return (
      <div className = "chatList">
        <div className = "chatListInner">
          { Object.keys(chats).map((key) => (
            <Link to = { `/chat/${key}/` } key = { key }>
              <div className = { this.props.active == chats[key].title ? 'chatListItem chatListItemActive' : 'chatListItem' }>
                  { `  ${chats[key].title}` }
                <span className="deleteIcon">
                  <DeleteIcon data-id = { key } onClick = {this.deleteChat} viewBox="0 0 24 24" style = { {"width": "12px", "height": "12px"} } color = "antiquewhite" hoverColor = "darkred" />
                </span>
              </div>
            </Link>
          )) }
        </div>
        <div className = "chatAdder">
          <TextField 
            key = "textField"
            name = "input"
            hintText = "Add new chat"
            underlineFocusStyle = { {borderColor: 'darkgoldenrod'} }
            style = { {fontSize: '12px', width: "calc(100% - 34px)", marginLeft: "10px"} }
            inputStyle = { {color: "dimgray"} }
            onChange = { this.handleChange }
            value = { this.state.input }
            onKeyUp = { this.handleKeyUp }
          >
          
          </TextField>
          <span onClick = { this.handleAdd }>
            <AddIcon 
              color = "grey"
              hoverColor = "darkgoldenrod"
              style = { {cursor: "pointer", width: "24px", height: "24px"} }
            />
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
