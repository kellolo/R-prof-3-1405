import React from 'react';
import './style.css';

export default (props) => {
    let { sender, text } = props;

    return (
        <div className={`d-flex flex-column msg ${props.sender != 'Me' ? "msgBot" : "msgSender"}`}  >
            <div className=" msgAvatar " >
                <img src={props.sender != 'Me' ? "src/public/img/2.svg" : "src/public/img/1.svg"} alt="#"
                    style={{ float: props.sender != 'Me' ? "right" : "left" }} />
                {sender && <strong>{sender}</strong>}
                {!sender && <strong>Bot</strong>}
                <p>{props.sender || (!props.sender && text) ? text : 'cyber answer...'}</p>
            </div>
        </div>
    )
}