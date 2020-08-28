import React from 'react';
import {Link} from 'react-router-dom'
class DropDown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  
};

showDropdownMenu=(event)=> {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu=()=> {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"black",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Product Backlog </div>

          { this.state.displayMenu ? (
          <ul>
              
         <li><Link to="/Story1">
             <button>React</button></Link></li>
                
         <li><a href="/Story1">Story1</a></li>
         <li><a href="/Story2">Story2</a></li>
         <li><a href="/Story3">Story3</a></li>
         <li><a href="/Story4">Story4</a></li>
         <li><a href="/Story5">Story5</a></li>
         <li><a href="/Story6">Story6</a></li>
        
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default DropDown;
