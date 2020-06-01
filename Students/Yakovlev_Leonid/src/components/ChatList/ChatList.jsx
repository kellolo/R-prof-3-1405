
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { List, ListItem } from 'material-ui/List';
import Icon from '@material-ui/core/Icon';

import './style.css';

export default class ChatList extends Component {
    render() {
        return (
            <List className = "chatlist">
                <Link to = "/chat/1" className = "">
                    <ListItem primaryText = "Chat 1" rightIcon = { <Icon color="primary" fontSize="small">add_circle</Icon> } /> 
                </Link>
                <Link to = "/chat/2">
                    <ListItem primaryText = "Chat 2" rightIcon = { <Icon color="primary" fontSize="small">add_circle</Icon> } />
                </Link>
                <Link to = "/chat/3">
                    <ListItem primaryText = "Chat 3" rightIcon = { <Icon color="primary" fontSize="small">add_circle</Icon> } />
                </Link>
                <Link to = "/chat/4">
                    <ListItem primaryText = "Chat 4" rightIcon = { <Icon color="primary" fontSize="small">add_circle</Icon> } />
                </Link>
            </List>

            // <div className="d-flex w-25 flex-column chatlist-mess">
            //     <div className="chatlist">
            //         <div className="chatname-wrap active">
            //             <p>Чат 1</p>
            //         </div>
            //         <div className="chatname-wrap">
            //             <p>Чат 2</p>
            //         </div>
            //         <div className="chatname-wrap">
            //             <p>Чат 3</p>
            //         </div>
            //         <div className="chatname-wrap">
            //             <p>Чат 4</p>
            //         </div>
            //         <div className="chatname-wrap">
            //             <p>Чат 5</p>
            //         </div>                                                                                
            //     </div>
            // </div>
        );
    }
}