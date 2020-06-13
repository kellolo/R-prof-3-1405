import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Reply from 'material-ui/svg-icons/content/reply';
import Share from 'material-ui/svg-icons/social/share';
import Delete from 'material-ui/svg-icons/action/delete';
import './style.css';

const listStyle = (
    {
        display: "flex",
        justifyContent: "center",
        width: "",
        backgroundColor: "#f0f5f9"
    }
);

const iconButtonElement = (
    <IconButton>
      <MoreVertIcon />
    </IconButton>
);
  
const rightIconMenu = (
<IconMenu
    iconButtonElement={ iconButtonElement }
    useLayerForClickAway={ true }
    /* open={ true } */
    targetOrigin={
        {vertical: 'top', horizontal: 'right'}
    }
    listStyle={ listStyle }
>
    <MenuItem className="menu__item">
        <Reply
            color="#41506d"
            hoverColor="#252932"
            className="menu-icon menu-icon__reply"
        />
    </MenuItem>
    <MenuItem className="menu__item">
        <Share
            color="#41506d"
            hoverColor="#252932"
            className="menu-icon menu-icon__share"
        />
    </MenuItem>
    <MenuItem className="menu__item">
        <Delete
            color="#41506d"
            hoverColor="#252932"
            className="menu-icon menu-icon__delete"
        />
    </MenuItem>
</IconMenu>
);

export default (props) => {

    let { sender, text } = props;
    let customClasses = '';

    let customStyles = {
        border: "1px solid #bbc5dd",
        borderRadius: "10px",
        marginBottom: "15px"
    };

    //sender ? sender = sender : sender = 'Bot';

    if(sender !== 'Bot') {
        customClasses = 'message__wrapper message__wrapper--'+sender;
    } else {
        customClasses = 'message__wrapper message__wrapper--Bot';
    }

    return (
        <ListItem
            className={ customClasses }
            leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
            rightIconButton={ rightIconMenu }
            primaryText={ sender }
            secondaryText={
                <p>
                    { text }
                </p>
            }
            secondaryTextLines={ 2 }
            style={ customStyles }
        />
    )
};