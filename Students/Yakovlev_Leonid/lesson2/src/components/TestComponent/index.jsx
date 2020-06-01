import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

import Message from '../Message/Message.jsx'

let messages = ['Hello', 'How are you?', 'I am fine'];

const handleClick = () => {
    messages.push('Ok');

    ReactDom.render(
        <div><MessageField messages={ messages }/></div>
    )
}

let MessageField = props => {
    let msgArr = props.messages.map(text => {
        return (<Message text={ text } />);
    });
    return (
        <div>
            <div>{ msgArr }</div>
            <button onClick={ handleClick }>Send</button>
        </div>
    )
}

export default MessageField;