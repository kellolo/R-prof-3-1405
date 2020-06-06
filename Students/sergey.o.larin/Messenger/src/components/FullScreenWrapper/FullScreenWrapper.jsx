import React from 'react';

import Box from "@material-ui/core/Box";

import Header from "../Header/Header.jsx";
import UserList from "../UserList/UserList.jsx";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    fullscreen: {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: '#202225',
        flexDirection: 'column',
    },
    content: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'stretch',
        flex: '1 1 auto',
        margin: '5px',
    },
});

const FullScreenWrapper = ({ respondent, children }) => {
    const classes = useStyles();
    return (
        <Box className={ classes.fullscreen }>
            <Header respondent={ respondent }/>
            <Box className={ classes.content }>
                <UserList />
                { children }
            </Box>
        </Box>
    )
}

export default FullScreenWrapper
