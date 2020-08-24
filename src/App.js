import React from 'react';
import logo from './logo.svg';
import './App.css';
import Story from './components/Story';
import Userstory from './components/Userstory';
import OptVel from './components/OptVel';


import { BrowserRouter as Router,Link, Switch,Route } from "react-router-dom";
import DropDown from './DropDown';
import Rt from './components/Rt';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
    <Route exact path="/" component={Story}/>
    <Route exact path="/Userstory" component={Userstory}/>
    <Route exact path="/DropDown" component={DropDown}/>
    <Route exact path="/OptVel" component={OptVel}/>
    <Route exact path="/Rt" component={Rt}/>

    </Switch>
    
    </div>
    </Router>
  );
}

export default App;
