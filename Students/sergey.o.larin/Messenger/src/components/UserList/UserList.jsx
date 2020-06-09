import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators, compose } from 'redux';

import { Clear, Person, PersonAdd, Settings } from '@material-ui/icons';

import {
    Box,
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
    closeRespondent,
    selectRespondent,
    unSelectRespondent,
} from "../../store/action/messenger";
import { newStoryLine, newStoryLineState } from "../../store/action/messages";
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.selected !== this.state.selected) {
            document.getElementById('message-box').scrollTo({ top: 999999 })
        }
    }

    addRespondent(id) {
        if (!this.props.messages[id]) {
            this.props.newStoryLineState(id, 1, 'Bot', `Это начало истории ваших личных сообщений с ${ this.props.contacts[id].name } ${ this.props.contacts[id].surname } !`)
            this.props.newStoryLine(id, 1, 'Bot', `Это начало истории ваших личных сообщений с ${ this.props.contacts[id].name } ${ this.props.contacts[id].surname } !`)
        }
        this.props.addRespondent(id);
        this.setState({
            cursor: 0,
        });
        this.selectedRespondent(id)
    }

    selectedRespondent(id) {
        this.setState({
            selected: id,
        });
        this.props.selectRespondent(id)
        this.props.history.push(`/chat/${ id }`)
    };

    closedRespondent(event, id) {
        event.preventDefault();
        event.stopPropagation()
        if (this.state.selected !== id && this.state.selected !== '') {
            this.selectedRespondent(this.state.selected)
        } else {
            this.setState({
                selected: '',
            });
            this.props.history.push(`/`)
            this.props.unSelectRespondent();
        }
        this.props.closeRespondent(id);
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

    openRespondentProfile(event, id) {
        this.setState({
            profilePage: {
                index: id,
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

    addContact(id, name) {
        return (
            <MenuItem
                key={ id }
                onClick={ () => this.addRespondent(id) }
            >
                { name }
            </MenuItem>
        )
    }

    addListItem(classes, id) {
        const { selected } = this.state;
        const { contacts } = this.props;
        return (
            <ListItem
                className={ classes.tab }
                button
                key={ id }
                to={ `/chat/${ id }` }
                selected={ selected === id }
                component={ Link }
                onClick={ () => this.selectedRespondent(id) }
                onMouseOver={ () => this.focusElement(id, true) }
                onMouseOut={ () => this.focusElement(id, false) }
            >
                <Tooltip title="Информация о контакте" label="respondentInfo">
                    <IconButton
                        className={ classes.buttonContact }
                        onClick={ (event) =>
                            this.openRespondentProfile(event, id) }
                    >
                        <Person fontSize={ 'small' }/>
                    </IconButton>
                </Tooltip>
                { this.state.profilePage.isOpen && this.state.profilePage.index === id
                    ? <Profile
                        index={ id }
                        user={ contacts[id].name }
                        contactInfo={ this.props.contacts[id] }
                        closeProfile={ this.closeProfile }
                    />
                    : null }
                <ListItemText primary={ contacts[id].name }/>
                <ListItemIcon style={ { minWidth: '10px' } }>
                    <Tooltip title="Закрыть чат" label="closedRespondent">
                        <IconButton
                            className={ classes.button }
                            id={ `respondent-${ id }` }
                            style={ { display: 'none' } }
                            onClick={ (event) => {
                                this.closedRespondent(event, id)
                            } }
                        >
                            <Clear fontSize={ 'small' }/>
                        </IconButton>
                    </Tooltip>
                </ListItemIcon>
            </ListItem>
        )
    }

    render() {
        const { classes, contacts, respondents } = this.props;
        let contactsList = [];
        let respondentsList = [];
        for (let key in contacts) {
            !respondents.includes(+key)
                ? contactsList.push(this.addContact(+key, contacts[+key].name)) : null
        }
        for (let key in respondents) {
            respondentsList.push(this.addListItem(classes, respondents[+key]))
        }

        return (
            <Box className={ classes.boxTabs }>
                <Box className={ classes.respondent }>
                    <Box className={ classes.root }>
                        <List
                            orientation="vertical"
                            variant="scrollable"
                            value={ false }
                        >
                            { respondentsList }
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
                        { this.state.settingPage.isOpen
                            ? <Profile index={ 0 }
                                       user={ this.props.user }
                                       closeProfile={ this.closeSettings }
                            />
                            : null }
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
                            { contactsList }
                        </Menu>
                    </Box>
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = ({ messengerReducer, messagesReducer }) => ({
    contacts: messengerReducer.contacts,
    messages: messagesReducer.messages,
    respondent: messengerReducer.respondent,
    respondents: messengerReducer.respondents,
    user: messengerReducer.user,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addRespondent,
        closeRespondent,
        newStoryLine,
        newStoryLineState,
        selectRespondent,
        unSelectRespondent,
    }, dispatch);
};
export default compose(withStyles(styles), withRouter, connect(mapStateToProps, mapDispatchToProps))(CompanionList);
