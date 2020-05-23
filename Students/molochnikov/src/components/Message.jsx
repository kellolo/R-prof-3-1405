import React from 'react';

export default class Message extends React.Component {

    render() {
        return (
            <li className="superchat__message-item">
                <div className="superchat__message-author">{this.props.author}</div>
                <div className="superchat__message-text">
                    <pre>{this.props.text}</pre>
                </div>
            </li>
        );
    }

}