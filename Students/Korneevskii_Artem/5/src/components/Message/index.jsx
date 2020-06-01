import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let Message = (props) => {

    let { sender, text } = props;

    if (!sender) {
        return (
            <div className="d-flex flex-column message-wrap bot">
                <strong>Bot</strong>
                <p>{ (!sender && text) ? text : 'ага...' }</p>
            </div>
        );
    }     
    else {
        return (
            <div className="d-flex flex-column message-wrap user">
                <strong>{ sender }</strong>
                <p>{ text }</p>
            </div>
        );        
    }   
};

export default Message;