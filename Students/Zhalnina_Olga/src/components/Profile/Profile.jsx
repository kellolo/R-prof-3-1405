import React from 'react';
import ReactDom from "react-dom";
import Header from '../Header/Header.jsx';



class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }

  render() {
    return (
      <div className="profile-page">
        <Header profile={ true }/>
        <div className="profile-fields">
          <input 
            type="text"
            className="profile-fields__input"
            placeholder="Your name"
            onChange={this.handleChange}
            onKeyUp={this.handleChange}
            value={this.state.userName}
          />
        </div>
      </div>
      
    )
  }
}

export default Profile;