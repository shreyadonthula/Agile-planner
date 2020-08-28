import React from 'react';
import './App.css';
import Story1 from './components/stories/Story1';
import Story2 from './components/stories/Story2';
import Story3 from './components/stories/Story3';
import Story4 from './components/stories/Story4';
import Story5 from './components/stories/Story5';
import Story6 from './components/stories/Story6';
import Userstory from './components/Userstory';
import OptVel from './components/OptVel';
import { BrowserRouter as Router,Link, Switch,Route } from "react-router-dom";
import DropDown from './DropDown';
import Rt from './components/Rt';
import Card from './Card';
import Nav from './components/Nav';
import Demo from './Demo'

function App() {
  return (
    <Router>
   
      <Card/>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Story1}/>
    <Route exact path="/Story1" component={Story1}/>
    <Route exact path="/Story2" component={Story2}/>
    <Route exact path="/Story3" component={Story3}/>
    <Route exact path="/Story4" component={Story4}/>
    <Route exact path="/Story5" component={Story5}/>
    <Route exact path="/Story6" component={Story6}/>
   
    <Route exact path="/Userstory" component={Userstory}/>
    <Route exact path="/DropDown" component={DropDown}/>
    <Route exact path="/OptVel" component={OptVel}/>
    <Route exact path="/Rt" component={Rt}/>
    <Route exact path="/Card" component={Card}/>
    
    </Switch>
    
    </div>
    </Router>
  );
}
export default App;
