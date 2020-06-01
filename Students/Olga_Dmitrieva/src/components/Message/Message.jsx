import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    let { sender, text } = props;
    return (
        <div>        
        { sender && <div className="d-flex flex-column sender msg"><strong>{ sender }</strong><p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p></div> }
        { !sender && <div className="d-flex flex-column recipient msg"><strong>Bot</strong><p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p></div> }
        </div>    
    )
}