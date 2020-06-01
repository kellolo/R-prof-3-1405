import React from 'react';

import { bindActionCreators, compose } from 'redux';
import connect from 'react-redux/es/connect/connect';

import { Box, IconButton, InputBase, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { sendMessage } from '../../store/action/respondents.js';


const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '10px',
        overflow: 'hidden',
        borderRadius: '10px',
        backgroundColor: '#2f3136',
        padding: '0 0 0 15px',
        cursor: 'text',
    },
    inputRow: {
        overflowWrap: 'break-word',
        color: '#ffffff',
    },
    button: {
        color: '#ffffff',
        '&.Mui-disabled': {
            color: '#4f545c',
        },
        '&:hover': {
            color: '#dcddde',
            backgroundColor: '#292b2f',
        },
    },
};

class InputRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waitBot: false,
            inputValue: '',
        }
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let { respondents } = this.props;
        let id;
        for (let key in respondents) {
            this.props.respondents[key].name === this.props.respondent
                ? id = key : null;
        }
        if (respondents[id]) {
            let messages = respondents[id].messagesList;
            /*if (this.props.respondents[id].messagesList[Object.keys(messages).length].user !== this.props.respondent && !this.state.waitBot) {     // TODO 1 ответ на все сообщения в течении таймаута
                this.setState({waitBot: true});
                setTimeout(() => {
                    this.sndMessage(this.props.respondent, 'Please wait...');
                    this.setState({ waitBot: false });
                }, 1000);
            }*/

            if (messages) {
                if (this.props.respondents[id].messagesList[Object.keys(messages).length]
                    && this.props.respondents[id].messagesList[Object.keys(messages).length].user
                    !== this.props.respondent && Object.keys(prevProps.respondents[id])
                    && Object.keys(prevProps.respondents[id].messagesList).length
                    !== Object.keys(messages).length) {
                    setTimeout(() => {
                        this.sndMessage(this.props.respondent, 'Привет!');
                    }, 1000);
                }
            }
            document.getElementById('message-box').scrollTo({ top: 999999 })
        }
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    inputText(value) {
        this.setState({ inputValue: value })
    }

    sndMessage(user, inputValue) {
        let { respondent, respondents } = this.props;
        let messagesList;
        let respondentId;
        for (let key in respondents) {
            if (respondents[key].name === respondent) {
                respondentId = key;
                messagesList = respondents[key].messagesList;
            }
        }
        let messageId = Object.keys(messagesList).length + 1;
        if (user === this.props.user) {
            this.props.sendMessage(respondentId, messageId, user, inputValue);
            this.setState({ inputValue: '' });
            document.getElementById('input-message').value = '';
        } else {
            this.props.sendMessage(respondentId, messageId, user, inputValue);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            this.props.respondent ?
                <Box className={ classes.root } onClick={ this.focusTextInput }>
                    <InputBase
                        className={ classes.inputRow }
                        id="input-message"
                        size="small"
                        autoComplete="off"
                        fullWidth
                        onKeyUp={ (event) => this.state.inputValue && event.keyCode === 13
                            ? this.sndMessage(this.props.user, this.state.inputValue) : null }
                        onChange={ (event) => this.inputText(event.target.value) }
                        placeholder="Введите сообщение"
                        inputRef={ this.textInput }
                    />
                    <IconButton
                        className={ classes.button }
                        disabled={ !this.state.inputValue }
                        id="sendButton"
                        onClick={ () => this.sndMessage(this.props.user, this.state.inputValue) }
                    >
                        <Send/>
                    </IconButton>
                </Box>
                : null
        )
    }
}

const mapStateToProps = ({ msgReducer, respondentsReducer }) => ({
    respondents: respondentsReducer.respondents,
    respondent: respondentsReducer.respondent,
    user: msgReducer.user,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ sendMessage }, dispatch);
};

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(InputRow)
