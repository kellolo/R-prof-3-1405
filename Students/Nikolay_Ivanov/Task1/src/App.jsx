import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserChatContainer from './components/UserChatContainer/UserChatContainer.jsx';

export default class Application extends React.Component {

	render() {
		return (
			<div className="container">
				<h1>HELLO REACT</h1>
				<h2>hot reloaded</h2>

				<UserChatContainer />
			</div>

		);
	}
}

