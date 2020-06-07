import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';

const useStyles = makeStyles({
    root: {
        display: 'block',
        width: 'auto',
        maxWidth: '60%',
        padding: '0.5em',
        overflowWrap: 'anywhere',  
        alignSelf: 'start',
        flexDirection: 'column',
        
    },
    user: {
        display: 'block',
        width: 'auto',
        maxWidth: '60%',
        padding: '0.5em',
        overflowWrap: 'anywhere',  
        alignSelf: 'flex-end',
        textAlign: 'right',
        flexDirection: 'column',
    },
    bodyMessage: {
        backgroundColor: 'rgb(85, 16, 212)',
        padding: '5px 20px',
        borderRadius: '20px',
        color: 'whitesmoke',
    },
    pClass: {
        marginRight: '1.5em'
    },
    pClassBot: {
        marginLeft: '1.5em'
    },
    pFix: {
        marginBottom: '0',
        padding: '0.2em'
    }
})

export default (props) => {
    const classes = useStyles();
    let { sender, text } = props;
    let differenceMessages = sender === 'Bot' ? classes.root : classes.user
    const messageBody = classes.bodyMessage;
    let p = sender === 'Bot' ? classes.pClassBot : classes.pClass;
    const pFix = classes.pFix;


    return (
         <div className={differenceMessages}>
            { sender && <strong className={p}>{ sender }</strong> }
            { !sender && <strong className={p}> Bot </strong>}
           <div className={messageBody}>
            <p className={pFix}>{ props.sender || (!props.sender && text) ? text : 'Bot tells you that he cant response more than this'}</p>
           </div>
        </div>
    )
}