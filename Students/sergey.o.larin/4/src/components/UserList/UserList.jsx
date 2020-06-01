import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators, compose } from "redux";
import { closeRespondent, selectRespondent } from "../../store/action/messages";

import { Clear } from "@material-ui/icons";

import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core';


const styles = {
    root: {
        flexDirection: 'column',
        minHeight: 0,
        width: '225px',
        flex: '0 0 auto',
        color: '#ffffff',
    },
    tab: {
        '&.Mui-selected': {
            backgroundColor: '#36393f',
            borderRadius: '5px',
        },
        '&.Mui-selected:hover': {
            backgroundColor: '#36393f',
            borderRadius: '5px',
        },
        '&:hover': {
            backgroundColor: '#36393f',
            borderRadius: '5px',
        },
        margin: '2px 0 2px 0',
    },
    button: {
        color: '#72767d',
        padding: '5px',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#36393f',
            borderRadius: '5px',
        },
    }
};

class CompanionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
        }
    }

    focusElement(index, isFocus) {
        let respondent = document.getElementById(`respondent-${ index }`);
        isFocus ? respondent.style.display = "block" : respondent.style.display = "none"
    }

    selectedRespondent(index) {
        this.setState({
            selected: index,
            messages: this.props.messages,
        });
        this.props.selectRespondent(this.props.users[index])
    };

    closedRespondent(event, index) {
        event.preventDefault();
        event.stopPropagation()
        this.props.users.splice(index, 1);
        if (this.state.selected === index) {
            this.setState({
                selected: '',
            });
            this.props.selectRespondent('')
            this.props.closeRespondent();
        }
    }

    render() {
        const { classes } = this.props;
        const { selected } = this.state;
        let respondents = this.props.users.map((user, i) => {
            return (
                <ListItem
                    className={ classes.tab }
                    button
                    key={ i }
                    to={ `/chat/${ i }` }
                    component={ Link }
                    onClick={ () => this.selectedRespondent(i) }
                    selected={ selected === i }
                    onMouseOver={ () => this.focusElement(i, true) }
                    onMouseOut={ () => this.focusElement(i, false) }
                >
                    <ListItemText primary={ user }/>
                    <ListItemIcon style={ { minWidth: '10px' } }>
                        <IconButton
                            className={ classes.button }
                            id={ `respondent-${ i }` }
                            style={ { display: 'none' } }
                            onClick={ (event) => {
                                this.props.history.push('/');
                                this.closedRespondent(event, i)
                            }
                            }
                        >
                            <Clear fontSize={ 'small' }/>
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
            )
        })

        return (
            <Box className={ classes.root }>
                <List
                    orientation="vertical"
                    variant="scrollable"
                    value={ false }
                >
                    { respondents }
                </List>
            </Box>
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    users: msgReducer.users,
    messages: msgReducer.messages,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        closeRespondent,
        selectRespondent,
    }, dispatch);
};
export default compose(withStyles(styles), withRouter, connect(mapStateToProps, mapDispatchToProps))(CompanionList);
