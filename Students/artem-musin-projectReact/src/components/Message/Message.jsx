import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';

const useStyles = makeStyles({
    root: {
        display: 'block',
        width: '75%',
        alignSelf: 'start',
        flexDirection: 'column',
        
    },
    user: {
        display: 'block',
        width: '75%',  
        alignSelf: 'flex-end',
        textAlign: 'right',
        flexDirection: 'column',
    },
    bodyMessage: {
        backgroundColor: 'rgb(85, 16, 212)',
        padding: '5px 20px',
        borderRadius: '20px',
        margin: '8px',
        color: 'whitesmoke',

    },
    pClass: {
        marginRight: '2em'
    },
    pClassBot: {
        marginLeft: '2em'
    }
})

export default (props) => {
    const classes = useStyles();
    let { sender, text } = props;
    let differenceMessages = sender === 'Bot' ? classes.root : classes.user
    const messageBody = classes.bodyMessage;
    let p = sender === 'Bot' ? classes.pClassBot : classes.pClass;


    return (
         <div className={differenceMessages}>
            { sender && <strong className={p}>{ sender }</strong> }
            { !sender && <strong className={p}> Bot </strong>}
           <div className={messageBody}>
            <p>{ props.sender || (!props.sender && text) ? text : 'Bot tells you that he cant response more than this'}</p>
           </div>
        </div>
    )
}