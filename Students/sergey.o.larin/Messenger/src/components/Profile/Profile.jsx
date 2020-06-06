import React from 'react';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
    Typography,
} from '@material-ui/core';

const useStyle = makeStyles({
    root: {
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    body: {},
    button: {
        '&:hover': {
            backgroundColor: '#bdb6bb',
            borderRadius: '5px',
        },
    }
});


const Profile = (props) => {
    const classes = useStyle();
    let { user, index, contactInfo, closeProfile } = props;

    return (
        index === 0 ?
            <Box>
                <Dialog
                    fullWidth
                    onClose={ closeProfile }
                    aria-labelledby="dialog-title"
                    open={ true }
                >
                    <DialogTitle className={ classes.title } id="title" onClose={ closeProfile }>
                        Настройки профиля
                    </DialogTitle>
                    <DialogContent className={ classes.body } dividers>
                        <Typography>
                            Какие-то настройки пользователя
                        </Typography>
                        <Typography>
                            Но скорее всего они не нужны
                        </Typography>
                        <Typography>
                            но это не точно
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={ closeProfile } className={ classes.button }>
                            Сохранить изменения
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
            :
            <Box>
                <Dialog
                    fullWidth
                    onClose={ closeProfile }
                    aria-labelledby="dialog-title"
                    open={ true }>
                    <DialogTitle className={ classes.title } id="title" onClose={ closeProfile }>
                        { user }
                    </DialogTitle>
                    <DialogContent className={ classes.body } dividers>
                        <Typography>
                            Фамилия: { contactInfo.surname }
                        </Typography>
                        <Typography>
                            Номер телефона: { contactInfo.phone }
                        </Typography>
                        <Typography>
                            Заметка: { contactInfo.note }
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={ closeProfile } className={ classes.button }>
                            Закрыть
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
    )
};

export default Profile