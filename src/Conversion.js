import React, { Component } from 'react';
import ChatInput from './Components/ChatInput';
import ChatHistory from './Components/ChatHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chatroom from './Components/Chatroom';
import Input from './Components/Input';

class Conversion extends Component{

    state = {
        userID: Math.round(Math.random() * 1000).toString(),
        history: [],
    };

    sendMessage = (message) => {
        console.log('sent message', message);
        const nextMessage = {
            Who: this.state.message.Who,
            What: this.state.message.What,
            When: this.state.message.When,
        };
        var list = []
        list.push(nextMessage)
        this.setState ({
            history: this.state.history.concat(message),
        })
    }
    render() {
        const {sendMessage, state} = this;
        return(
            <div>
            {/*<MuiThemeProvider>
                <ChatHistory history={state.history}/>
                <ChatInput userID={state.userID}
                           sendMessage={sendMessage}/>
            </MuiThemeProvider>*/}
            <Chatroom />
           {/* <Input onSubmit={this.handleSubmitText} /> */}
            </div>
        )
    }
}

export default Conversion;