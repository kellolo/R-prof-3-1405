import React, { useState } from 'react';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from "redux";

import {
    Box,
    Button,
    Divider,
    makeStyles,
    MenuItem,
    TextField,
    Typography
} from '@material-ui/core';

import { selectUser, } from "../../store/action/messenger";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: '#202225',
        flexDirection: 'column',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        padding: '10px',
    },
    devider: {
        backgroundColor: '#ffffff',
        margin: '3px',
        width: '100%',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',

    },
    select: {
        width: '225px',
        '& .MuiInputLabel-root': {
            color: '#ffffff',
            '&:selected': {
                color: '#ffffff',
            }
        },
        '& .MuiSelect-selectMenu': {
            color: '#ffffff',
        },
        '& .MuiInputLabel-filled': {
            color: '#ffffff'
        },
        '& label.Mui-focused': {
            color: '#ffffff',
        },
        '& label.Mui-input': {
            color: '#ffffff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#dcddde',
            },
            '&:hover fieldset': {
                borderColor: '#ffffff',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ffffff',
            },
        },
    },
    button: {
        margin: '10px',
        color: '#dcddde',
        '&.Mui-disabled': {
            color: '#4f545c',
        },
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#202225',
        },
    },
}));

const Auth = (props) => {
    const classes = useStyles();
    const { auth, contacts } = props;
    const [user, setUser] = useState('');
    let menuContacts = [];


    for (let key in contacts) {
        menuContacts.push(
            <MenuItem key={ +key } value={ +key }>
                { contacts[+key].name }
            </MenuItem>
        )
    }

    const handleChange = (event) => {
        setUser(event.target.value);
        props.selectUser(event.target.value, contacts[event.target.value].name)
    };

    return (
        <Box className={ classes.root }>
            <Box>
                <Typography variant="h4" className={ classes.text }>
                    Вход
                </Typography>
            </Box>
            <Divider className={ classes.devider }/>
            <Box className={ classes.box }>
                <Typography className={ classes.text }>
                    Выберите пользователя
                </Typography>
                <TextField
                    className={ classes.select }
                    select
                    label="Пользователь"
                    value={ user }
                    onChange={ handleChange }
                    variant="outlined"
                >
                    { menuContacts }
                </TextField>
                <Button
                    disabled={ !user }
                    className={ classes.button }
                    onClick={ auth }
                >
                    Войти
                </Button>
            </Box>
        </Box>
    );
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        selectUser
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth)