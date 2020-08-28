import React, { Component } from 'react';

import { Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
class Card extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: true,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Product Backlog
        </button>
        {
          this.state.showMenu
            ? (
               
            <ul>
              
              <li><a  style={{color:"white"}} href="/Story1">Story1</a></li> 
              <li><a style={{color:"white"}} href="/Story2">Story2</a></li> 
              <li><a style={{color:"white"}} href="/Story3">Story3</a></li> 
              <li><a style={{color:"white"}} href="/Story4">Story4</a></li> 
              <li><a style={{color:"white"}} href="/Story5">Story5</a></li>
              
            <li><a style={{color:"white"}} href="/Story6">Story6</a></li>
           
             </ul>
    //         <select id = "dropdown" value={this.state.showMenu} onChange={(e)=>{this.setState(e.target.value)}}>
    //         <option value="kk">NA</option>
    //         <option value="1"><a href="/Story2">Story2</a></option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //         <option value="5">5</option>
    
    
    // </select>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default Card;