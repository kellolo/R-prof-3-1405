import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';


export default class ChatList extends React.Component {
	render() {
		return (
			
				<List>
					<Link to="/chat/1/">
						<ListItem 
							primaryText="Brendan Lim"
							leftAvatar={<Avatar src="src/public/img/2.svg" />}
							rightIcon = { <ContentSend />} />
					</Link>
					<Divider />
					<Link to="/chat/2/">
						<ListItem 
							primaryText="Eric Hoffman"
							leftAvatar={<Avatar src="src/public/img/1.svg" />}
							rightIcon = { <ContentSend />}/>
					</Link>
				</List>
			
			
		)
	}
}