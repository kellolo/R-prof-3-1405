import React from 'react';

import {Link} from 'react-router-dom';
import TelegramIcon from '@material-ui/icons/Telegram';
import Done from 'material-ui/svg-icons/action/done';
import {TextField, Avatar, RaisedButton} from 'material-ui'
import './style.css';

import { setName } from '../../store/actions/profile_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  handleChange = (evt, field) => {
    if (evt.keyCode !== 13) {
      this.setState({ [field]: evt.target.value })
    }
  }

  setProfile = (name) => {
    name && this.props.setName(name);
  };

  render() {
    return (
        <div className = "profile-wrapper">
          <h1 className = "chatName">Log in</h1>
          <div className = "profile-form">
            <Avatar size = { 100 } backgroundColor = '#00bcd4'>
              <TelegramIcon style = { { 'width': '80px', 'height': '80px', 'color': 'white' } } viewBox = '0 0 24 24' />
            </Avatar>
            <TextField 
              fullWidth = { true }
              underlineFocusStyle = { {borderColor: '#00bcd4'} }
              floatingLabelText = { this.props.user || 'Please enter your profile name' }
              floatingLabelFocusStyle = { {color: '#00bcd4'} }
              underlineStyle = { {borderColor: '#00bcd4'} }
              className = 'name-input'
              onChange = { (evt) => this.handleChange(evt, 'user') }
            />
            <Link to = '/chat/1/'>
              <RaisedButton 
                disabled = { !(this.state.user || this.props.user) }
                backgroundColor = '#00bcd4'
                style = { { color: '#00bcd4', width: '200px', marginTop: '20px' } }
                onClick = { () => this.setProfile(this.state.user) }
              >
                <Done style = { {color: '#ccc'} } />
              </RaisedButton>
            </Link>
          </div>
        </div>
    )
  };
};

const mapStateToProps = ({ profileReducer }) => ({
  user: profileReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);