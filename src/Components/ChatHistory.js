import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import ChatInput from './ChatInput';


export default class ChatHistory extends React.Component{
    
    static propTypes = {
        history: PropTypes.array,
    };
    render() {
      const {props} = this;
      
        return (
            <ul className="collection">
            { props.history.map((messageObj) => {
              const imgURL = "https://robohash.org/" +messageObj.Who+ "?set=set3&bgset=bg2&size=70x70";
              const messageDate = new Date(messageObj.When);
              const messageDateTime = messageDate.toLocaleDateString() +
                ' at ' + messageDate.toLocaleTimeString();
              return(
                <li className="collection-item avatar" key={messageObj.When}>
                  <img src={imgURL} alt={messageObj.Who}/>
                  <span className="title">Bot #{messageObj.Who}</span>
                  <p>
                    <i className="prefix mdi-action-alarm" />
                    <span className="message-date">{messageDateTime}</span>
                    <br />
                    <span>{messageObj.What}</span>
                  </p>
                </li>
                )
              })
            }
          </ul>
          );
    }
}

