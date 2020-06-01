import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
//import Button from '../Button.jsx'

let messages = ['Норм','dfh']

const handleClick = () => {
        messages.push('Ok')
        ReactDom.render (
            <div>
                {<MessageField messages= {messages} />}
            </div>,
            document.getElementById('app')
        )
    }
const Button = (props) =><div>{props.text}</div>
const MessageField = props=>{
    messages.push('Ok')
    let msgArr = props.messages.map(text =>{
        return (<Button text={ text }/>)
    })
    
    return (
        <div>
            <div>{msgArr}</div>
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default MessageField


