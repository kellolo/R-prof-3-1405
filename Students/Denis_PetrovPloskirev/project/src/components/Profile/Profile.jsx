import React from 'react';

import {Link} from 'react-router-dom';
import Icon from 'material-ui/svg-icons/social/sentiment-satisfied';
import Done from 'material-ui/svg-icons/action/done';
import {TextField, FlatButton, Avatar, RaisedButton} from 'material-ui'
import './Profile.css';

import { setName } from '../../store/actions/profile_actions.js';
import { setBio } from '../../store/actions/profile_actions.js'
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      bio: ''
    }
  }

  handleChange = (evt, field) => {
    if (evt.keyCode !== 13) {
      this.setState({ [field]: evt.target.value })
    }
  }

  setProfile = (name, bio) => {
    //вызов Action
    name && this.props.setName(name);
    bio && this.props.setBio(bio);
  }

  setBio = (text) => {
    //вызов Action
    this.props.setBio(text);
  }

  render() {
    let backBtn;
    if (this.props.user) {
      backBtn = (
        <Link to = '/chats/'>
          <div className = "link404 blocklink404">back</div>
        </Link>
      )
    } else {
      backBtn = null
    }
    return (
        <div className = "profileWrapper">
          <h1 className = "chatName"> Profile </h1>
          <div className = "profileForm">
            <Avatar size = { 80 } backgroundColor = 'darkgoldenrod'>
              <Icon style = { {'width': '60px', 'height': '60px', 'color': 'white'} } viewBox = '0 0 24 24' />
            </Avatar>
            <TextField 
              fullWidth = { true }
              underlineFocusStyle = { {borderColor: 'darkgoldenrod'} }
              floatingLabelText = { this.props.user || 'Name' }
              floatingLabelFocusStyle = { {color: 'darkgoldenrod'} }
              underlineStyle = { {borderColor: 'darkgoldenrod'} }
              className = 'nameInput'
              onChange = { (evt) => this.handleChange(evt, 'user') }
            />
            <TextField 
              fullWidth = { true }
              underlineFocusStyle = { {borderColor: 'darkgoldenrod'} }
              multiLine = { true }
              rows = { 1 }
              rowsMax = { 1 }
              floatingLabelText = { this.props.bio || 'Bio' }
              floatingLabelFocusStyle = { {color: 'darkgoldenrod'} }
              underlineStyle = { {borderColor: 'darkgoldenrod'} }
              className = 'bioInput'
              onChange = { (evt) => this.handleChange(evt, 'bio') }
            />
            <Link to = '/chats/'>
              <RaisedButton 
                disabled = { !(this.state.user || this.props.user) }
                backgroundColor = 'darkgoldenrod'
                style = { {'color': '#777', width: '200px'} }
                onClick = { () => this.setProfile(this.state.user, this.state.bio) }
              >
                <Done style = { {color: '#ccc'} } />
              </RaisedButton>
            </Link>
            { backBtn }
          </div>
        </div>
    )
  };
};

const mapStateToProps = ({ prflReducer }) => ({
  user: prflReducer.user,
  bio: prflReducer.bio
});

const mapDispatchToProps = dispatch => bindActionCreators({ setName, setBio }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);