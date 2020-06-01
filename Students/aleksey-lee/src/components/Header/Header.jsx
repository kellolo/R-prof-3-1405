import React from 'react';
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';
import ListItem from 'material-ui/List/ListItem';
import AddBox from 'material-ui/svg-icons/content/add-box';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

   static propTypes = {
       chatId: PropTypes.string
   };

   static defaultProps = {
       chatId: '1'
   };

   render() {
        return (
            <div className="header d-flex justify-content-between">
                <div><span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span></div>
                <div>
                <Link to="/userprofile/" style={{display: 'block'}}>
                    <ListItem leftIcon={<AddBox />} primaryText="User profile" style={{color:'#fff'}} />
                </Link>
                </div>
            </div>
        )
    }
}
