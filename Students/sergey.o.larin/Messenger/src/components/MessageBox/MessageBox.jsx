import React from 'react';

import Box from "@material-ui/core/Box";

import Message from "../Message/Message.jsx";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        contain: 'size',
        overflow: 'auto',
        flex: '1 1 auto',
        wordWrap: 'break-word',
    },
});

const MessageBox = (props) => {
    const classes = useStyles();
    const { id, messages, user } = props;
    let messagesList = [];
    Object.keys(messages).forEach(key => {
        messagesList.push(<Message
            key={ key }
            user={ user.name }
            id={ id }
            sender={ messages[key].user }
            text={ messages[key].text }/>);
    });

    return (
        <Box className={ classes.root } id="message-box">
            { messagesList }
        </Box>
    )
};

export default MessageBox
