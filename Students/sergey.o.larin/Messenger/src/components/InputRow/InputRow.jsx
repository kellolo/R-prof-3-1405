import React from 'react';

import { bindActionCreators, compose } from 'redux';
import connect from 'react-redux/es/connect/connect';

import { Box, IconButton, InputBase, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { sendMessage, loadMessages } from '../../store/action/messages.js';
import { loadMessenger } from '../../store/action/messenger';


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
            inputValue: '',
        }
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById('message-box').scrollTo({ top: 999999 })
        this.props.loadMessages();

    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    inputText(value) {
        this.setState({ inputValue: value })
    }

    sndMessage(user, inputValue) {
        let { respondent } = this.props;
        if (user.id === this.props.user.id) {
            this.props.sendMessage(user.id, respondent, user.name, inputValue);
            this.setState({ inputValue: '' });
            document.getElementById('input-message').value = '';
        } else {
            this.props.sendMessage(user.id, respondent, user, inputValue);
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

const mapStateToProps = ({ messengerReducer, messagesReducer }) => ({
    respondents: messengerReducer.respondents,
    respondent: messengerReducer.respondent,
    user: messengerReducer.user,
    messages: messagesReducer.messages,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        sendMessage,
        loadMessages,
        loadMessenger,
    }, dispatch);
};

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(InputRow)
