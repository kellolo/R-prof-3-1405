import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {
	static propTypes = {
		chatId: PropTypes.number
	}
	static defaultProps = {
		chatId: 1
	}

	render() {
		return (
			<div className="header">				
				<AppBar
					title={`Chat with ${this.props.chatId}`}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			</div>
		)
	}
}