import React, { Component } from 'react';
import './style.sass';

import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect'
import { goBack } from 'connected-react-router';

import { TextField, FloatingActionButton } from 'material-ui';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


import { setUserName, changeUserNameInProfile, changeUserEmailnProfile } from '../../store/actions/profile_actions.js';
import { setUserEmail } from '../../store/actions/profile_actions.js';

class UserProfile extends Component {
    state = {
        inputName: '',
        inputEmail: '',
        showEditName: false,
        showEditEmail: false
    }
  
    showEditField = (key) => {
        this.setState ({
            [key]: !this.state[key]
        })
    }

    changeInput = (event, key, name, email, lastName) => {   
        if (event.keyCode !== 13) {
            this.setState ({
            [key]: event.target.value
        })
        } else {
            this.setState ({
                inputName: '',
                inputEmail: '',
                showEditName: false,
                showEditEmail: false
            })
            name && this.props.setUserName(name, lastName) && this.props.changeUserNameInProfile(name);    
            email &&  this.props.setUserEmail(email) && this.props.changeUserEmailnProfile(email);
        }
    }
       

    changeUserName = (text, lasName) => {
        this.setState ({
            inputName: '',
            showEditName: false
        })
        this.props.setUserName(text, lasName);  
        this.props.changeUserNameInProfile(text); 
    }

    changeUserEmail = (text) => {
        this.setState ({
            inputEmail: '',
            showEditEmail: false
        })
        this.props.setUserEmail(text);
        this.props.changeUserEmailnProfile(text)
        
    }

    render() {
        return (     
            <div className = "user-profile_wrapper">
                <h1 className="user-profile_title text-center">User profile</h1>
                <div className = "d-flex flex-direction-row">
                    <p className = "user-profile_text">User name: { this.props.userName }</p>
                    <button onClick = { () => this.showEditField('showEditName')} className = "user-profile_edit-btn"><EditIcon /></button>
                </div>
                {this.state.showEditName && <div className = "d-flex flex-direction-row">
                                                <TextField
                                                        autoFocus
                                                        name="input"
                                                        value = {this.state.inputName}
                                                        fullWidth={ true }
                                                        hintText="Enter user name"
                                                        style={ { fontSize: '22px' } }
                                                        onKeyUp = { () => this.changeInput(event, 'inputName', this.state.inputName, this.state.inputEmail, this.props.userName) }
                                                        onChange= { () => this.changeInput(event, 'inputName') }
                                                />  
                                                <FloatingActionButton onClick={ () => this.changeUserName(this.state.inputName, this.props.userName) }>
                                                    <SaveIcon />
                                                </FloatingActionButton>
                                            </div> }
                <div className = "d-flex flex-direction-row">
                    <p className = "user-profile_text">User email: { this.props.userEmail }</p>
                    <button onClick = { () => this.showEditField('showEditEmail')} className = "user-profile_edit-btn"><EditIcon /></button>
                </div>
               {this.state.showEditEmail && <div className = "d-flex flex-direction-row">
                                                <TextField
                                                        autoFocus
                                                        name="input"
                                                        fullWidth={ true }
                                                        hintText="Enter user email"
                                                        style={ { fontSize: '22px' } }
                                                        onKeyUp = { () => this.changeInput(event, 'inputEmail', this.state.inputName, this.state.inputEmail) }
                                                        onChange= { () => this.changeInput(event, 'inputEmail') }
                                                />
                                                <FloatingActionButton onClick={ () => this.changeUserEmail(this.state.inputEmail) }>
                                                        <SaveIcon />
                                                </FloatingActionButton>
                                            </div> }
                    <FloatingActionButton  className = "user-profile_back-link" onClick = { () => this.props.goBack() }>
                        <KeyboardBackspaceIcon />
                    </FloatingActionButton>
            </div>
        )
    }
}

const mapStateToProps = ({ prfReducer }) => ({
    userName: prfReducer.userName,
    userEmail: prfReducer.userEmail
});

const mapDispathToProps = dispatch => bindActionCreators({ setUserName, changeUserNameInProfile, changeUserEmailnProfile, setUserEmail, goBack}, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(UserProfile);