import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import './style.css';

const list = "chatList-list";
const item = "item";
const active = "item-active";
const icon = "icon";

export default class ChatList extends Component {
    render() {
        return (
            <List className = {list}>
                <Link to = "/chat/1/">
                    <ListItem primaryText = "Активный чатик" leftIcon = { <ContentSend className = {icon}/> } className = {item}/>
                </Link>
                <Link to = "/chat/2/">
                    <ListItem primaryText = "Чатик друзей" leftIcon = { <ContentSend className = {icon}/> } className = {item, active}/>
                </Link>
                <Link to = "/chat/3/">
                    <ListItem primaryText = "Учебный чатик" leftIcon = { <ContentSend className = {icon}/> } className = {item}/>
                </Link>
                <Link to = "/chat/4/">
                    <ListItem primaryText = "Рабочий чатик" leftIcon = { <ContentSend className = {icon}/> } className = {item}/>
                </Link>
                <Link to = "/chat/5/">
                    <ListItem primaryText = "Рекламный чатик" leftIcon = { <ContentSend className = {icon}/> } className = {item}/>
                </Link>
            </List>
        );
    }
}