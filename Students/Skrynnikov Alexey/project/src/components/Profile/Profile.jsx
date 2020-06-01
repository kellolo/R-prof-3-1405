import React from 'react';

import {Link} from 'react-router-dom';
import Icon from 'material-ui/svg-icons/social/sentiment-satisfied';
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

  handleChange = (evt) => {
    if (evt.keyCode !== 13) {
      this.setState({ user: evt.target.value })
    }
  }

  setProfile = (name) => {
    name && this.props.setName(name);
  };

  render() {
    return (
        <div className = "profileWrapper">
          <h1 className = "chatName"> Profile </h1>
          <div className = "profileForm">
            <Avatar size = { 80 } backgroundColor = 'rgb(6, 121, 159)'>
              <Icon style = { {'width': '60px', 'height': '60px', 'color': 'white'} } viewBox = '0 0 24 24' />
            </Avatar>
            <TextField 
              fullWidth = { true }
              underlineFocusStyle = { {borderColor: 'rgb(6, 121, 159)'} }
              floatingLabelText = { this.props.user || 'Name' }
              floatingLabelFocusStyle = { {color: 'rgb(6, 121, 159)'} }
              underlineStyle = { {borderColor: 'rgb(6, 121, 159)'} }
              className = 'nameInput'
              onChange = { (evt) => this.handleChange(evt) }
            />
            <Link to = '/chat/1/'>
              <RaisedButton 
                disabled = { !(this.state.user || this.props.user) }
                backgroundColor = 'rgb(6, 121, 159)'
                style = { {'color': '#777', width: '200px'} }
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

const mapStateToProps = ({ profReducer }) => ({
  user: profReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);