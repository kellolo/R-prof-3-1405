import React from 'react';
import ReactDom from 'react-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


import './style.sass';

export default (props) => {
    let {sender, text} = props;
    return (
        <div className={"msg " + (props.sender ? "align-self-start" : "align-self-end")}>
            <div className = "d-flex justify-content-between align-items-center">
                {sender && <strong>{ sender }</strong>}
                {!sender && <strong>Bot</strong>}
                {sender  && <button onClick = { () => props.deleteMessage(props.messageId, props.chatId, props.msgIndexInMessageList) } className = "msg_btn"><HighlightOffIcon /></button>}
            </div>
            <p>{ sender || (!sender && text) ? text : 'cyber answer...' }</p>
        </div>
    )
}