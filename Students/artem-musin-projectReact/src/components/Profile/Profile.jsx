import React from 'react';
import { Grid, Typography, Paper, Divider, Box } from '@material-ui/core';

import './style.css'
import { TagFaces } from '@material-ui/icons';
import { Chip } from 'material-ui';

const paperStyle = {
    paddingTop: '2em',
    margin: 'auto',
    maxWidth: '55em',
    backgroundColor: '#e4ccff'
}

const profileInfoHeader = {
     borderRadius: '1.5em',
     color: 'whitesmoke',
     backgroundColor: ' #9999ff'
}

const mainProfileInfo = {
    paddingLeft: '2em'
}

const ulStyle = {
    listStyleType: 'none'
}

export default class Profile extends React.Component {
 
    render() {
    
        return (
            <Paper
                style={paperStyle}>

                <Grid
                    container
                    component="div"
                    spacing={4}>
                    <Grid
                        container
                        item
                        component="div"
                        xs={4}
                        spacing={4}
                        direction="column"
                        style={mainProfileInfo}
                        >
                            <Grid item>
                                <img src="https://sun7-9.userapi.com/1xjiM1HHTgBf8dfR7oBNpU1puXu3irG0LvgelA/NgMNbLU65iw.jpg" alt="Profile Photo"/>
                            </Grid>
                            <Grid 
                                container
                                item
                                component="div"
                                direction="column">
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        Name: Artem
                                    </Typography>
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        City: Saratov
                                    </Typography>
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        Date of born: 21/01/1998 
                                    </Typography>
                                    <Divider />
                            </Grid>
                    </Grid>
                        <Grid
                            container
                            item
                            component="div"
                            xs={8}
                            spacing={5}
                            direction="column">
                                <Grid item component="div">
                                    <Typography variant="h6" align="center"
                                    style={profileInfoHeader}>
                                        About me
                                    </Typography>
                                        <Box component="div">
                                            <Typography variant="body1">
                                                I'm a not professional JS or React developer. Imma just a guy who want to learn it.
                                                And i'm learning with my mates from GeekBrains, supported by Vue Developer Sergey T.
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item component="div">
                                    <Typography variant="h6" align="center"
                                    style={profileInfoHeader}>
                                        Interests
                                    </Typography>
                                        <Box component="div">
                                            <Typography variant="body1">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum illum cumque tempora nihil, minima ratione fuga quod dicta deserunt?
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item component="div">
                                    <Typography variant="h6" align="center"
                                    style={profileInfoHeader}>
                                        Skills
                                    </Typography>
                                        <Box component="ul"
                                        style={ulStyle}>
                                            
                                        </Box>
                                </Grid>
                        </Grid>

                </Grid>
            </Paper>
        )

    }
}