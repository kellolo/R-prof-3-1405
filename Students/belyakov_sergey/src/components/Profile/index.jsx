import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'

import {setName} from '../../store/actions/user-actions'

import TextField from '@material-ui/core/TextField'
import {Button, InputAdornment} from '@material-ui/core'
import {AccountCircle, ArrowBack, Save} from '@material-ui/icons'


import './style.css'

class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    setName: PropTypes.func.isRequired
  }

  state = {
    inputValue: this.props.user.name
  }

  onChange(e) {
    if (e.key !== "Enter") {
      const inputValue = e.target.value
      this.setState((prevState) => ({
        ...prevState,
        inputValue: inputValue
      }))
    } else {
      this.changeName(this.state.inputValue)
    }
  }

  changeName(name) {
    if (name !== '') {
      const {setName} = this.props
      setName(name)
    }
  }

  render() {
    const {inputValue} = this.state

    return (
      <div className='profile'>
        <h1>Profile</h1>

        <div className="input-name">
          <div className="input-name-field">
            <TextField
              onChange={this.onChange.bind(this)}
              onKeyUp={this.onChange.bind(this)}
              label="Имя"
              value={inputValue}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle
                      className={
                        inputValue === this.props.user.name ? 'accept' :
                          inputValue === '' ? 'incorrect' : ''
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="input-name-btn" onClick={() => this.changeName(inputValue)}>
            <Button
              className={inputValue === '' ? 'inactive' : ''}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<Save/>}
            >
              Сохранить
            </Button>
          </div>
        </div>
        <Link to='/'><ArrowBack/>Вернуться</Link>
      </div>
    )
  }
}

const mapStateToProps = ({userReducer}) => ({
  user: userReducer.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({setName}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)