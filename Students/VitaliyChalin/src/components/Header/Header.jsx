import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends React.Component {

    render() {

        let titleText = '';
        let homeLink = '';
        let path;

        (this.props.userName) ?
            titleText = `@${ this.props.userName }` :
            titleText = `@Me`;

        if(this.props.chatId) homeLink = <Link to="/" className="header__link link__gohome">Go Home</Link>;

        if(this.props.userName && this.props.chatId) {
            path = `/chat/${ this.props.chatId }/profile/`;
        } else {
            path = '/profile/';
        }

        return (
            <header className="header">
                <h1>
                    <Link to={{
                            pathname: path,
                            pathCode: 'profile'
                        }}
                            className="header__link link__profile ml-3">
                                { titleText }
                    </Link>
                </h1>
                { homeLink }
            </header>
        )
    }
}