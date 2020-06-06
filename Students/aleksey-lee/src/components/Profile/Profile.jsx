import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

import { loadProfile } from '../../store/actions/profile_actions.js'

import './style.css';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      userinfo: {}
    }
  }

  componentDidMount(){
    this.props.loadProfile()
  }

  render(){
    const { name, age, photo } = this.props.userInfo;
    console.log(this.props)

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-4">
              <img src={photo} alt={name}/>
            </div>
            <div className="col col-6">
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
            <div className="col col2">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ profileReducer }) => ({
  userInfo: profileReducer.userInfo
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);