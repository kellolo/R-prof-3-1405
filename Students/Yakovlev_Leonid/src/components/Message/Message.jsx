import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    //props: sender, text
    let { sender, 
        text } = props;

    // sender = sender ? sender : 'Bot';
    //dopil
    if (sender) {
        return (
            <>
                <p className="d-flex flex-column msg my-text">
                    <span><strong>{ sender }</strong></span>
                    <span>{ text }</span>
                </p>
            </>
        );
    }     
    else {
        return (
            <>
                <p className="d-flex flex-column msg bot">
                    <span><strong>Bot</strong></span>
                    <span>{ (!sender && text) ? text : 'cyber answer...' }</span>
                </p>
            </>
        );        
    } 

}

