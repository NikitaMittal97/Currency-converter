import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Conversion from './Conversion';
import "./App.css"
import Home from './Home';

const hStyle = {
  textAlign: "center",
  fontStyle: 'helvetica',
  fontSize: 40,
  color: "rgb(26, 199, 199)",
  margin: 10,
}


class MainPage extends Component {
  
   render() {
      return (
         <Router>
            <div>
              <div>
                <h2 style={hStyle}>Currency Converter</h2>
              </div> 

               <ul className="ul-style">
                  <li><NavLink to={'/Home'}>Home</NavLink></li>
                  <li><NavLink to={'/Convert'}>Convert</NavLink></li>
                  <li><a href="https://auth.evader61.hasura-app.io/ui"
                         className="login-button">Sign in</a></li>
               </ul>
               
               <Switch>
                  <Route exact path='/Home' component={Home} />
                  <Route exact path='/Convert' component={Conversion} />
               </Switch>
            </div>
         </Router>
         
      );
   }
}
export default MainPage;