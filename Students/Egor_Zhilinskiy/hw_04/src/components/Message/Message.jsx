import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default (props) => {    
    let {sender, text} = props;  
    
    return (
        <div className = "message"
        style={   (sender === null) ?
            {alignSelf:'flex-start', backgroundColor:'orange'}  : {alignSelf:'flex-end' }}               
>
            {sender && <strong> { sender }</strong>}
            {!sender && <strong >Bot</strong>}
            <p>{ props.sender || (!props.sender && text) ? text : ' Hi, I\'m Bot' }</p>
        </div>
    )
    
}

