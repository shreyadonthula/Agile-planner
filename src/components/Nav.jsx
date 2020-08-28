import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component{
    constructor(props){
        super();
        this.state = {
              displayMenu: false,
            };
    }
    showMenu(event) {
        event.preventDefault();
        this.setState({
            displayMenu: true,
        });
      }
   render(){ 
  return (
      <nav> 
          <div  className="dropdown" style = {{background:"black",width:"200px"}} >
         <div className="button" onClick={this.showMenu}> Product Backlog </div>
         {
            this.state.displayMenu ? (
        //   <ul>
              
        //  <li><Link to="/Story1">
        //      <button>Story1</button></Link></li>          
        //  <li><a href="/Story2">Story2</a></li>
        //  <li><a href="/Story3">Story3</a></li>
        //  <li><a href="/Story4">Story4</a></li>
        //  <li><a href="/Story5">Story5</a></li>
        //  <li><a href="/Story6">Story6</a></li>
        
        //   </ul>

        <select id = "dropdown" value={this.state.displayMenu} onChange={(e)=>{this.setState(e.target.value)}}>
        <option value="NA">NA</option>
        <option value="1"> <ul> <li><a href="/Story2">Story2</a></li></ul></option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>


</select    >
        ):
        (
          null
        )
        }

       </div>
          
        
   
    </nav>
  );
}
}

export default Nav;
