import React from 'react';
import PropTypes from 'prop-types';
import MessageField from './../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import './Layout.css'

export default class Layout extends React.Component {
	static propTypes = {
		chatId: PropTypes.number
	}
	static defaultProps = {
		chatId: 1
	}
	render() {
		return (
			<div >
				<Header chatId={this.props.chatId} />
				<div className="d-flex justify-content-center w-100">
					<div className="pr-5">
						<ChatList />
					</div>
					<div className="p-3 msgList">
						<MessageField />
					</div>
				</div>

			</div>
		)
	}
}
