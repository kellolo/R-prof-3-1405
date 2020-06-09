import React from 'react';

import Box from "@material-ui/core/Box";

import InputRow from '../InputRow/InputRow.jsx';
import MessageBox from '../MessageBox/MessageBox.jsx';

import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: '#202225',
        flexDirection: 'column',
    },
    box: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'stretch',
        flex: '1 1 auto'
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto'
    },
    scrollerSpacer: {
        display: 'block',
        height: '15px',
        width: '100%',
        flex: '0 0 auto'
    }
});


const Layout = (props) => {
    const classes = useStyles();
    const { id, messages, user } = props;

    return (
        <div className={ classes.root }>
            <Box className={ classes.box }>
                <Box className={ classes.row }>
                    <MessageBox
                        user={ user }
                        id={ id }
                        messages={ messages }
                    />
                    <div
                        id="scroller-spacer"
                        className={ classes.scrollerSpacer }
                    />
                    <InputRow/>
                </Box>
            </Box>
        </div>
    )
}

export default Layout
