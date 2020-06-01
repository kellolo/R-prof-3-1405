import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators, compose } from 'redux';

import { Clear, Person, PersonAdd, Settings } from '@material-ui/icons';

import {
    Box,
    ButtonGroup,
    IconButton,
    List, ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Tooltip,
    withStyles,
} from '@material-ui/core';

import {
    addRespondent,
    selectRespondent,
    closeRespondent
} from "../../store/action/respondents";

import Profile from '../Profile/Profile.jsx'


const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        width: '225px',
        flex: '1 1 auto',
        color: '#ffffff',
        overflow: 'auto',
        contain: 'size',
    },
    boxTabs: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'stretch',
        flex: '1 1 auto'
    },
    respondent: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto'
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
    bottomButtons: {
        borderTop: 'solid 1px #72767d',
        display: 'flex',
        margin: '10px',
        padding: '15px 0px 0px 0px',
        justifyContent: 'space-around',
    },
    buttonContact: {
        color: '#72767d',
        padding: '5px',
        margin: '0 20px 0 0',
        '&:hover': {
            color: '#ffffff',
            borderRadius: '5px',
        },
    },
    button: {
        color: '#72767d',
        padding: '5px',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#36393f',
            borderRadius: '5px',
        },
    },
    scrollerSpacer: {
        display: 'block',
        height: '15px',
        width: '100%',
        flex: '0 0 auto'
    }
};

class CompanionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            cursor: 0,
            profilePage: {
                index: 0,
                isOpen: false,
            },
            settingPage: {
                isOpen: false
            }
        }
        this.closeSettings = this.closeProfileSetting.bind(this);
        this.closeProfile = this.closeRespondentProfile.bind(this);
    }

    focusElement(index, isFocus) {
        let respondent = document.getElementById(`respondent-${ index }`);
        isFocus ? respondent.style.display = "block" : respondent.style.display = "none"
    }

    addRespondent(user) {
        let { respondents } = this.props;
        let respondentId = Math.floor(Math.random() * Math.floor(999999));
        for (let key in respondents) {
            if (respondents[key] === respondentId) {
                respondentId = Math.floor(Math.random() * Math.floor(999999));
            }
        }
        let messages = {
            user: user,
            text: 'Как твои дела?',
        }
        this.props.addRespondent(respondentId, user, messages);
        this.setState({
            cursor: 0,
            selected: `${ respondentId }`,
        });
        this.props.selectRespondent(respondents[respondentId].name)
        this.props.history.push(`/chat/${ respondentId }`);
    }

    selectedRespondent(i) {
        let { respondents } = this.props;
        this.setState({
            selected: i,
        });
        this.props.selectRespondent(respondents[i].name)
    };

    closedRespondent(event, index) {
        delete this.props.respondents[index];
        if (this.state.selected === index) {
            this.setState({
                selected: '',
            });
            this.props.selectRespondent('')
            this.props.closeRespondent();
        }
        event.preventDefault();
        event.stopPropagation()
    }

    openProfileSetting(event) {
        event.preventDefault();
        event.stopPropagation()
        this.setState({
            settingPage: {
                isOpen: true,
            }
        })
    }

    closeProfileSetting() {
        this.setState({
            settingPage: {
                isOpen: false,
            }
        })
    }

    openRespondentProfile(event, index) {
        this.setState({
            profilePage: {
                index: index,
                isOpen: true,
            }
        })
        event.preventDefault();
        event.stopPropagation()
    }

    closeRespondentProfile() {
        this.setState({
            profilePage: {
                index: 0,
                isOpen: false,
            }
        })
    }

    openContactsList = (event) => {
        this.setState({
            cursor: event.currentTarget,
        })
    };

    closeContactsList = () => {
        this.setState({
            cursor: null,
        })
    };

    addListItem(classes, i, respondent) {
        const { selected } = this.state;
        return (
            <ListItem
                className={ classes.tab }
                button
                key={ i }
                to={ `/chat/${ i }` }
                selected={ selected === i }
                component={ Link }
                onClick={ () => this.selectedRespondent(i) }
                onMouseOver={ () => this.focusElement(i, true) }
                onMouseOut={ () => this.focusElement(i, false) }
            >
                <Tooltip title="Информация о контакте" label="respondentInfo">
                    <IconButton
                        className={ classes.buttonContact }
                        onClick={ (event) =>
                            this.openRespondentProfile(event, i) }
                    >
                        <Person fontSize={ 'small' }/>
                    </IconButton>
                </Tooltip>
                { this.state.settingPage.isOpen
                    ? <Profile index={ 0 }
                               user={ this.props.user }
                               closeProfile={ this.closeSettings }
                    />
                    : null }
                { this.state.profilePage.isOpen && this.state.profilePage.index === i
                    ? <Profile
                        index={ i }
                        user={ respondent.name }
                        contactInfo={ this.props.contactInfo }
                        closeProfile={ this.closeProfile }
                    />
                    : null }
                <ListItemText primary={ respondent.name }/>
                <ListItemIcon style={ { minWidth: '10px' } }>
                    <Tooltip title="Закрыть чат" label="closedRespondent">
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
                    </Tooltip>
                </ListItemIcon>
            </ListItem>
        )
    }

    render() {
        const { classes } = this.props;
        let respondentsList = this.props.respondents;
        let respondents = [];
        for (let key in respondentsList) {
            respondents.push(this.addListItem(classes, key, respondentsList[key]))
        }
        let respondentsArr = [];
        for (let key in this.props.respondents) {
            respondentsArr.push(this.props.respondents[key].name)
        }
        let contacts = this.props.contacts.map((contact, i) => {
            if ((respondentsArr.filter((respondent) => respondent.indexOf(contact) >= 0).length === 0)) {
                return (
                    <MenuItem
                        key={ i }
                        onClick={ () => this.addRespondent(contact) }
                    >
                        { contact }
                    </MenuItem>
                )
            }
        });

        return (
            <Box className={ classes.boxTabs }>
                <Box className={ classes.respondent }>
                    <Box className={ classes.root }>
                        <List
                            orientation="vertical"
                            variant="scrollable"
                            value={ false }
                        >
                            { respondents }
                        </List>
                    </Box>
                    <div id="scroller-spacer" className={ classes.scrollerSpacer }/>
                    <Box className={ classes.bottomButtons }>
                        <Tooltip title="Настройки профиля" label="addRespondent">
                            <IconButton
                                className={ classes.button }
                                onClick={ (event) => this.openProfileSetting(event) }
                            >
                                <Settings/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Добавить собеседника" label="addRespondent">
                            <IconButton
                                className={ classes.button }
                                style={ { transform: 'scale(-1, 1)' } }
                                onClick={ (e) => this.openContactsList(e) }
                            >
                                <PersonAdd/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="contacts"
                            anchorEl={ this.state.cursor }
                            keepMounted
                            open={ Boolean(this.state.cursor) }
                            onClose={ this.closeContactsList }
                        >
                            { contacts }
                        </Menu>
                    </Box>
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = ({ msgReducer, respondentsReducer }) => ({
    contacts: msgReducer.contacts,
    contactInfo: msgReducer.contactInfo,
    user: msgReducer.user,
    respondent: respondentsReducer.respondent,
    respondents: respondentsReducer.respondents,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addRespondent,
        closeRespondent,
        selectRespondent,
    }, dispatch);
};
export default compose(withStyles(styles), withRouter, connect(mapStateToProps, mapDispatchToProps))(CompanionList);
