import React from 'react';
import './style.css';

export default (props) => {
  let { sender, text, botName } = props;
  return (
    <div className = { sender ? "msgSelf msg" : "msg" }>
      <h3 className = 'authorMsg'>
        { sender && <strong>{ sender }</strong> }
        { !sender && <strong> { botName }</strong> }
      </h3>
      <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p>
    </div>
  )
}