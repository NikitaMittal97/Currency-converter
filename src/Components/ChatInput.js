import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const chipStyle = {
    marginTop: 10,
    marginBottom: 10,
    marginLeft:100,
    marginRight:900,
    width: 120,
    
}

class ChatInput extends React.Component {
   
    static propTypes = {
        userID: PropTypes.number,
        sendMessage: PropTypes.func,
    };
    onSubmit = (e) => {
        e.preventDefault();
        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }
        const messageObj = {
            Who: this.props.userID,
            What: message,
            When: new Date().valueOf(),
        };
        this.props.sendMessage(messageObj);
        this.refs.txtMessage.value = '';
        this.refs.txtMessage.focus();
    };
    componentDidMount() {
        this.refs.txtMessage.focus();
    }

    render() {
        const { props, onSubmit } = this;
        const imgURL = "https://robohash.org/" +props.userID+ "?set=set3&bgset=bg2&size=70x70"
        return(
            <footer>
                <form className="container"
                    onSubmit={ onSubmit }>
                    <div className="row">
                        <div className="input-field">
                            <input type="text"
                                    ref="txtMessage"
                                    placeholder="Ask something..."
                                    className="txt-area" />
                            <button type="submit"
                                    className="button">Send</button>
                            <br />
                            <Chip className="chip" style={chipStyle}>
                                <Avatar src={imgURL} />
                                Bot #{props.userID}
                            </Chip>
                        </div>
                    </div>
                </form>
            </footer>
        )

    }
}

    
export default ChatInput;