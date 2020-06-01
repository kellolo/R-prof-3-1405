import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import MessagesField from './components/MessageField/MessageField.jsx';

let container = document.getElementById('app')

let user = 'Loontik';

ReactDom.render(
    <div className="d-flex w-100 justify-content-center">
        <MessagesField user={ user } />
    </div>
    ,
    container
)

// let messages = ['Hello', 'How are you?', 'I am fine'];

// const handleClick = () => {
//     messages.push('Ok');

//     ReactDom.render(
//         <div><MessageField messages={ messages }/></div>, 
//         container
//     )
// }

// const Message = props => <div>{ props.text }</div>

// const MessageField = props => {
//     let msgArr = props.messages.map(text => {
//         return (<Message text={ text } />);
//     });
//     return (
//         <div>
//             <div>{ msgArr }</div>
//             <button onClick={ handleClick }>Send</button>
//         </div>
//     )
// }

// ReactDom.render(
//     <MessageField messages={ messages }/>
//     , container);
