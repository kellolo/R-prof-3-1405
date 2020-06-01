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
    let msgArr = [];
    Object.keys(props.messages).forEach(key => {
        msgArr.push(<Message
            key={ key }
            user={ props.user }
            sender={ props.messages[key].user }
            text={ props.messages[key].text }/>);
    });
    return (
        <Box className={ classes.root } id="message-box">
            { msgArr }
        </Box>
    )
};

export default MessageBox
