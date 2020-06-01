import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './style.css';

export default class ChatList extends Component {
    render() {
        return (
            <div className="d-flex w-25 flex-column messenger-chatlist">
                <ul className="chatlist">        
                    <li><Link className="chatname-wrap" to = "/chat/1/">Чат 1</Link></li>
                    <li><Link className="chatname-wrap" to = "/chat/2/">Чат 2</Link></li>            
                    <li><Link className="chatname-wrap" to = "/chat/3/">Чат 3</Link></li>                
                    <li><Link className="chatname-wrap" to = "/chat/4/">Чат 4</Link></li>                
                    <li><Link className="chatname-wrap" to = "/chat/5/">Чат 5</Link></li>                                                                        
                </ul>
            </div>
        );
    }
}