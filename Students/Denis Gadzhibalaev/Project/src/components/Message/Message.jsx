import React from 'react';
import ReactDom from 'react-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


import './style.sass';

export default (props) => {
    let {sender, text, userName} = props;
    return (
        <div className={"msg " + (sender == userName ? "align-self-start" : "align-self-end")}>
            <div className = "d-flex justify-content-between align-items-center">
                {sender == userName && <strong>{ sender }</strong>}
                {sender !== userName && <strong>Bot</strong>}
                {sender == userName && <button onClick = { () => props.deleteMessage(props.messageId) } className = "msg_btn"><HighlightOffIcon /></button>}
            </div>
            <p>{ sender || (!sender && text) ? text : 'cyber answer...' }</p>
        </div>
    )
}