import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/App.css';
import {client} from '../Dialogflow/DialogflowClient';


class Chatroom extends React.Component {
    constructor(props, context) {
        super(props);
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.botMessage = this.botMessage.bind(this);
        this.state = {
            message: '',
            messages:[],
            userID: Math.round(Math.random() * 1000).toString(),
        }
        
    }

    static propTypes = {
        userID: PropTypes.string
    }
    
    updateMessage(event) {
        console.log('updateMessage: '+event.target.value);
        this.setState ({
            message: event.target.value
        })
    }
    submitMessage(event) {
        console.log('submitMessage: ' +this.state.message);
        const messageObj = {
            Who: this.state.userID,
            What: this.state.message,
            When: new Date().valueOf(),
        };
        var conversation = Object.assign([], this.state.messages)
        conversation.push(messageObj)
        this.setState ({
            messages: conversation
        })
        /*client.textRequest(messageObj.What)
            .then((response) => {
                messageObj.Who = this.state.userID,
                messageObj.What = response.result.fulfillment['speech'],
                messageObj.When = new Date().valueOf(),
                conversation.push(messageObj),
                this.setState ({
                    messages: conversation
                })
                console.log(response)
            })*/
        this.botMessage()
        this.refs.textMsg.focus();
        this.refs.textMsg.value = '';
    }
    botMessage() {
        client.textRequest(this.state.message)
        .then((response) => {
            const botMessageObj = {
            avatar: this.state.userID,
            reply: response.result.fulfillment['speech'],
            time: new Date().valueOf(),
            }
           var conversation = Object.assign([], this.state.messages)
            conversation.push(botMessageObj),
            this.setState ({
                messages: conversation
            })
            console.log(response)          
        })
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            console.log('Testing onKeyPress');
            this.submitMessage(event);
        }
    }
    
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    componentDidMount() {
        this.refs.textMsg.focus();
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {props} = this;
        
        const currentMessages = this.state.messages.map((messageObj) => {
            const imgURL = "https://robohash.org/" +messageObj.Who+ "?set=set3&bgset=bg2&size=70x70";
            const messageDate = new Date(messageObj.When);
            const messageDateTime = messageDate.toLocaleDateString() +
                    ' at ' + messageDate.toLocaleTimeString();
            return (
                <div className = "container">
                    <li key={messageObj.When} className = "messageItem">
                        <img src={imgURL} align="left" className="profileImg"/>
                        <span className="profileName">
                            Bot #{messageObj.Who} <br />
                            {messageDateTime}
                        </span> 
                        <p className="message">{messageObj.What}</p>
                </li>
                </div>
            )
        })
        const currentBotMessages = this.state.messages.map((botMessageObj) => {
            const imgURL = "https://robohash.org/" +botMessageObj.avatar+ "?set=set3&bgset=bg2&size=70x70";
            const messageDate = new Date(botMessageObj.time);
            const messageDateTime = messageDate.toLocaleDateString() +
                    ' at ' + messageDate.toLocaleTimeString();
            return (
                <div className = "container">
                    <li key={botMessageObj.time} className = "messageItem">
                        <img src={imgURL} align="left" className="profileImg"/>
                        <span className="profileName">
                            Bot #{botMessageObj.avatar} <br />
                            {messageDateTime}
                        </span> 
                        <p className="message">{botMessageObj.reply}</p>
                </li>
                </div>
            )
        })
        return(
            <div>
                <ul className="box">
                    {currentMessages}
                    {currentBotMessages}
                    <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el }}>
                </div>
                </ul>

                <footer className="inputContainer">
                    <input type="text" 
                        placeholder="Message" 
                        onChange={this.updateMessage}
                        className="inputArea"
                        ref="textMsg"
                        onKeyPress={this.handleKeyPress} />
            
                    <button onClick={this.submitMessage}
                            className="submitBtn"
                            type="submit">Send</button>
                </footer>
            </div>
        )

    }
}

export default Chatroom;