import React from 'react';
import ReactDom from 'react-dom';
import './Message.css';

export default (props) => {    
    let { sender, text } = props;
    return (
        <div className={`msg ${!sender ? "bot" : "sender"}`}>
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong> }
            <p>{ text }</p>
        </div>
    )
}