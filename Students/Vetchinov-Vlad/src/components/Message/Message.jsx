import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    //props: sender, text
    let { sender, text } = props;
    let className = "d-flex flex-column msg";
    if (sender) {
        className += " msg-sender";
    } else {
        className += " msg-bot";
    }
    // sender = sender ? sender : 'Bot';
    //dopil
    return (
        <div className= { className }>
            {/* <strong>{ sender }</strong> */}
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong> }
            <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p>
        </div>
    )
}