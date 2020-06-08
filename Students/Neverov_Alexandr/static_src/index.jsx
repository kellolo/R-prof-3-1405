import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//    'h1',
//    { className: "element" },
//    'Кажется, мы подключили React',
// );

let messages = ['Привет', 'Как дела?'];

// const handleClick = () => {
//
// };

const MessageComponent = (props) => <div>{ props.text }</div>;

const MessageField = (props) => {
   const messageElemnts = props.messages.map(message => <MessageComponent text={ message } />);
   return (
       <div>
           <h1>React Chat</h1>
           { messageElemnts }
       </div>
   )
};

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);