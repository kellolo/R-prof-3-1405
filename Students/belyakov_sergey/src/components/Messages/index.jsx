import React, {Component} from 'react'
import PropTypes from 'prop-types'

import connect from 'react-redux/es/connect/connect'

import Message from '../Message/index.jsx'

import './style.css'

class Messages extends Component {
  static propTypes = {
    messages: PropTypes.object
  }

  static defaultProps = {
    messages: {}
  }

  render() {
    const {messages, roomId, user} = this.props
    let msgArr = []

    Object.keys(messages).forEach(key => {
      if (messages[key].roomId === roomId) {
        msgArr.push({
            messageId: key,
            message: messages[key].message,
            author: messages[key].author,
            roomId: messages[key].roomId
          }
        )
      }
    })

    return (
      <div className="messages">
        {
          msgArr.map((message, index) => (
            <Message
              user={user}
              author={message.author}
              message={message.message}
              key={index}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({msgReducer}) => ({
  messages: msgReducer.messages
})

export default connect(mapStateToProps)(Messages)