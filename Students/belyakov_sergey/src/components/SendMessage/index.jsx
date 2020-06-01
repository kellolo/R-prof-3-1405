import React from 'react'

import './style.css'

import {TextField} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

export default (props) => {
  const {inputValue, onChange, onSend} = props

  return (
    <div className="send-message-form">
      <TextField
        fullWidth
        label="Введите сообщение"
        color={"primary"}
        onChange={onChange}
        onKeyUp={onChange}
        value={inputValue}/>
      <button
        className={`send-message-btn ${inputValue !== '' ? 'action' : ''}`}
        onClick={onSend}
      >
        <SendIcon/>
      </button>
    </div>
  )
}