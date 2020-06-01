import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography, withStyles } from "@material-ui/core";

const styles = {
    root: {
        color: '#fff',
        top: '0',
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0px 20px 0px',
    }
}

class Header extends React.Component {
    static propTypes = {
        user: PropTypes.string
    }
    static defaultProps = {
        user: ''
    }

    render() {
        let { classes, respondent } = this.props;

        return (
            <Box className={ classes.root }>
                { respondent && <Typography variant="h5">{ respondent }</Typography> }
                { !respondent && <Typography variant="h5">Выберите собеседника</Typography> }
            </Box>
        );
    }
}

export default withStyles(styles)(Header)