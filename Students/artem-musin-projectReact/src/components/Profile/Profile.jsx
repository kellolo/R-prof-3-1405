import React from 'react';
import { Grid, Typography, Paper, Divider, Box, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { setName, setBio, setDate, setCity } from '../../store/actions/profile_actions.js'
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';



import './style.css'

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

const linkButton = {
    textDecoration: 'none'
}

class Profile extends React.Component {

    static propTypes = {
        user: PropTypes.string,
        date: PropTypes.string,
        bio: PropTypes.string,
        city: PropTypes.string
    }

    static defaultProps = {
        user: 'Anonymous',
        date: 'Undefined',
        bio: 'No information given',
        city: 'Undefined'
    }

    handleInfo = () => {
        console.log(this.props.user);
        console.log(this.props.date);
        console.log(this.props.bio);
        console.log(this.props.city)
    }

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
                            <Grid
                                item
                                component='a'>
                                    <Link to='/'
                                        style={linkButton}>
                                            Go to the chats
                                        </Link>
                                </Grid>

                            <Grid item>
                                <img src="https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/" alt="Profile Photo"/>
                            </Grid>
                            <Grid 
                                container
                                item
                                component="div"
                                direction="column">
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        Name: { this.props.user }
                                    </Typography>
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        City: { this.props.city }
                                    </Typography>
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        Date of born: { this.props.date }
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
                                                { this.props.bio }
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

const mapStateToProps = ({ prflReducer }) => ({
    user: prflReducer.user,
    date: prflReducer.date,
    bio: prflReducer.bio,
    city: prflReducer.city
  });  

  const mapDispatchToProps = dispatch => bindActionCreators({ setName, setBio, setDate, setCity }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile); 
