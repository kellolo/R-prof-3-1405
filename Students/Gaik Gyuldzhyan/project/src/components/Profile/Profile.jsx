import React from 'react';

import {Link} from 'react-router-dom';
import Icon from 'material-ui/svg-icons/social/sentiment-satisfied';
import Done from 'material-ui/svg-icons/action/done';
import {TextField, Avatar, RaisedButton} from 'material-ui'
import './style.css';

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
    name && this.props.setName(name);
    bio && this.props.setBio(bio);
  }

  setBio = (text) => {
    this.props.setBio(text);
  }

  render() {
    let backBtn;
    if (this.props.user) {
      backBtn = (
        <Link to = '/chat/1'>
          <div className="backBtn">
            <span className="line tLine"></span>
            <span className="line mLine"></span>
            <span className="label">Back to Chat</span>
            <span className="line bLine"></span>
	        </div>
        </Link>
      )
    } else {
      backBtn = null
    }
    return (
        <div>
          <div className = "headingContainer">
            <p className ="userHeading">User</p>
            <p className ="profileHeading">Profile</p>
          </div>
          <div className = "profileForm">
            <Avatar size = { 80 } backgroundColor = '#0c3246' >YN</Avatar>
            <TextField 
              fullWidth = { true }
              floatingLabelText = { this.props.user || 'Name' }
              floatingLabelStyle = { {color: 'teal'} }
              className = 'nameInput'
              onChange = { (evt) => this.handleChange(evt, 'user') }
            />
            <TextField 
              fullWidth = { true }
              multiLine = { true }
              rows = { 1 }
              rowsMax = { 1 }
              floatingLabelText = { this.props.bio || 'Bio' }
              floatingLabelStyle = { {color: 'teal'} }
              className = 'bioInput'
              onChange = { (evt) => this.handleChange(evt, 'bio') }
            />
            <Link to = '/chat/1'>
              <RaisedButton 
                disabled = { !(this.state.user || this.props.user) }
                backgroundColor = '#0c3246'
                style = { {'color': '#777', width: '200px', borderRadius:"0"} }
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

const mapStateToProps = ({ profileReducer }) => ({
  user: profileReducer.user,
  bio: profileReducer.bio
});

const mapDispatchToProps = dispatch => bindActionCreators({ setName, setBio }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

