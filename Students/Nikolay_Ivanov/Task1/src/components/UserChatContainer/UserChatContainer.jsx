import React from 'react';
import Message from '../Message/Message.jsx';
//import { debug } from 'webpack';


class UserChatContainer extends React.Component {

    constructor(props) {
        super(props);

        this.myInput = React.createRef();

        this.state = {

            messages: [
                {
                    key: 1,
                    text: 'Hello',
                    user: 'Me'
                },
                {
                    key: 2,
                    text: 'How are you?',
                    user: 'Me'
                },
                {
                    key: 3,
                    text: 'I am fine',
                    user: 'Me'
                }]

        };
    }

    getMax = () => {
        //debugger;

        let m = 0;
        this.state.messages.map((item) => {
            if (item.key > m) {
                m = item.key;
            }
        });
        return m;
    }


    send = () => {

        let { messages } = this.state;
        let n = this.getMax() + 1;
        messages.push(
            {
                key: n,
                text: this.myInput.current.value,
                user: 'someuser'
            });
        this.setState({ messages: messages });
    }

    render() {

        let msgArr = this.state.messages.map(msg => {
            return (<Message key={msg.key} text={msg.text} sender={msg.user} />);
        });


        return (
            <React.Fragment>
                <div className="container">
                    <div className="form-group">
                        {msgArr}
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <input ref={this.myInput}  type="text" className="form-control" />
                        </div>

                        <div className="col-md-2">
                            <button style={{ width: "100%" }} onClick={this.send} className="btn btn-outline-primary"  > {'<<'} </button>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        );
    }

}


export default UserChatContainer;