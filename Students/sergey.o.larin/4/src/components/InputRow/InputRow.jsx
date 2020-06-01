import React from 'react';

import { bindActionCreators, compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { sendMessage } from '../../store/action/messages.js';

import { Box, IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import InputBase from "@material-ui/core/InputBase";

import { withStyles } from "@material-ui/core/styles";


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
        let { messages } = this.props;
        /*if (this.props.messages[Object.keys(messages).length].user != null && !this.state.waitBot) {     // TODO 1 ответ на все сообщения в течении таймаута
            this.setState({waitBot: true});
            setTimeout(() => {
                this.sndMessage(null, 'Please wait...');
                this.setState({ waitBot: false });
            }, 1000);
        }*/
        if (messages) {
            if (this.props.messages[Object.keys(messages).length].user !==
                this.props.respondent &&
                Object.keys(prevProps.messages).length !== Object.keys(messages).length) {
                setTimeout(() => {
                    this.sndMessage(this.props.respondent, 'Привет!');
                }, 1000);
            }
        }
        document.getElementById('message-box').scrollTo({ top: 999999 })
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    inputText(value) {
        this.setState({ inputValue: value })
    }

    sndMessage(user, inputValue) {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        if (user === this.props.user) {
            this.props.sendMessage(messageId, user, inputValue);
            this.setState({ inputValue: '' });
            document.getElementById('input-message').value = '';
        } else {
            this.props.sendMessage(messageId, user, inputValue);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Box className={ classes.root } onClick={ this.focusTextInput }>
                <InputBase
                    className={ classes.inputRow }
                    id="input-message"
                    size="small"
                    autoComplete="off"
                    fullWidth
                    onKeyUp={ (event) => this.state.inputValue && event.keyCode === 13 ? this.sndMessage(this.props.user, this.state.inputValue) : null }
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
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages,
    respondent: msgReducer.respondent,
    user: msgReducer.user,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ sendMessage }, dispatch);
};

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(InputRow)
