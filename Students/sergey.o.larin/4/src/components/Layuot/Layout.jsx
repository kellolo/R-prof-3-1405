import React from 'react';
import PropTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect';
import { compose } from "redux";

import Box from "@material-ui/core/Box";

import MessageField from '../InputRow/InputRow.jsx';
import MessageBox from '../MessageBox/MessageBox.jsx';

import { withStyles } from "@material-ui/core";


const styles = {
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: '#202225',
        flexDirection: 'column',
    },
    box: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'stretch',
        flex: '1 1 auto'
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto'
    },
    scrollerSpacer: {
        display: 'block',
        height: '15px',
        width: '100%',
        flex: '0 0 auto'
    }
};

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.root }>
                <Box className={ classes.box }>
                    <Box className={ classes.row }>
                        <MessageBox user={ this.props.user } messages={ this.props.messages }/>
                        <div id="scroller-spacer" className={ classes.scrollerSpacer }/>
                        <MessageField/>
                    </Box>
                </Box>
            </div>
        );
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages,
    user: msgReducer.user,
});

export default compose(withStyles(styles), connect(mapStateToProps))(Layout);
