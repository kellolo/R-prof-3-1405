import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    let { sender, text } = props;

        return (
        <div className="message" style= { { alignSelf: !sender ? 'flex-start' : 'flex-end', backgroundColor: !sender ? '#ffffe0' : ''} }>
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong> }
            <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p>
            <span className="metadata">
                <span className="time">01:05 PM</span>
            </span>
        </div>
    )
}