import React from 'react'
import './style.css'

export default (props) => {
  const {author, message, user} = props
  const itUser = author === user

  return (
    <div className="message-field">
      <div className={itUser ? "message-field_user" : "message-field_bot"}>
        <div>
          <span className={itUser ? "message-field_user__bg-color" : "message-field_bot__bg-color"}>{!itUser && (
            <h5>{author}: </h5>)}
            {message}
          </span>
        </div>
      </div>
    </div>
  )
}