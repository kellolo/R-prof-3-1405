import React from 'react';

import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        color: '#FFFFFF',
        backgroundColor: '#22262f4d',
        textAlign: 'left',
        padding: '5px 15px',
        borderRadius: '20px',
        fontSize: '18px',
        margin: '5px',
        maxWidth: '70%',
        width: 'max-content',
    },
    user: {
        color: '#FFFFFF',
        backgroundColor: '#2a2d3347',
        textAlign: 'right',
        padding: '5px 15px',
        borderRadius: '20px',
        fontSize: '18px',
        margin: '5px',
        alignSelf: 'flex-end',
        maxWidth: '70%',
        width: 'max-content',
    }
});

const Sender = (props) => {
    let { user, id, sender, text } = props;
    const classes = useStyles();
    let color = sender === null || sender !== user ? classes.root : classes.user

    return (
        <div className={ color }>
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong> }
            <Typography>{ props.sender || (!props.sender && text) ? text : 'Please wait...' }</Typography>
        </div>
    )
};

export default Sender