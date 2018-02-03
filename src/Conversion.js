import React, { Component } from 'react';
import ChatInput from './Components/ChatInput';
import ChatHistory from './Components/ChatHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Conversion extends Component{

    state = {
        userID: Math.round(Math.random() * 1000).toString(),
        history: [],
    };

    sendMessage = (message) => {
        console.log('sent message', message);
    }
    render() {
        const {sendMessage, state} = this;
        return(
            <div>
            <MuiThemeProvider>
                <ChatHistory history={state.history}/>
                <ChatInput userID={state.userID}
                           sendMessage={sendMessage}/>
            </MuiThemeProvider> 
            </div>
        )
    }
}

export default Conversion;