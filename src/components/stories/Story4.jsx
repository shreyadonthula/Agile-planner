import React, { Component,useState } from 'react'
import { BrowserRouter as Router,Link, Route,Redirect } from "react-router-dom";

const Story4 = () => {
    const [storypoints,setstorypoints]=useState('');
    return (  
        <form>  
        <div className="story-size">
            <p>USER STORY : PLANTS vs ZOMBIES</p>
            <p>DESCRIPTION:</p>
            <p>Create a new game by entering a name.
            Invite estimators by giving them a url where they can access the game
            join a game by entering  name on the page the other received the url for
            start a round by entering an item in a single multi-line text field
            see the item we're estimating
            see all items we will try to estimate this session</p>
            <p>Story points:
            <input type="text" value={storypoints} onChange={(e)=>{setstorypoints(e.target.value)}} required/>
         
           
            {/* { storypoints>3  ? storypoints:1}

             <Link to={
                {pathname:'/Userstory',
            storypoints:storypoints}>
            <button>next</button>
                
            }>
            </Link>  */}

              <Link to='/Userstory'>
           
            <button>next</button>
                
            </Link>
          </p>

   
        <div className='rowC'>
        
            </div>
            </div>
        </form>
    );
}
 
export default Story4;