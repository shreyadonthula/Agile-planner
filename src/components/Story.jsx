import React, { Component,useState } from 'react'
import { BrowserRouter as Router,Link, Route,Redirect } from "react-router-dom";
import Userstory from './Userstory';

const Story = () => {
    const [storypoints,setstorypoints]=useState('');
    return (  
        <form>
        <div>
            <p>USER STORY : GAMING</p>
            <p>DESCRIPTION:</p>
            <p>Create a new game by entering a name.
            Invite estimators by giving them a url where they can access the game
            join a game by entering  name on the page the other received the url for
            start a round by entering an item in a single multi-line text field
            see the item we're estimating
            see all items we will try to estimate this session</p>
            <p>Story points:
            <input type="text" value={storypoints} onChange={(e)=>{setstorypoints(e.target.value)}} required/>
            {/* {
                storypoints >3 ?
            setstorypoints(1):setstorypoints(2)
           
            }
           { storypoints>3 && 
            console.log(storypoints)}
           {/* {
             storypoints>3  ? (storypoints=storypoints):(storypoints=1)

             <Link to={
                {pathname:'/Userstory',
            storypoints:storypoints}>
            <button>next</button>
                
            }>
            </Link> */}
              <Link to='/Userstory'>
           
            <button>next</button>
                
            </Link>

           
          
        {/*  */}

          
              

              
                 </p>
        </div>
        </form>
    );
}
 
export default Story;