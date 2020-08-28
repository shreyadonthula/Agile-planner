import React, { Component } from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Userstory = (props) => {
    const [storysize,setstorysize]=useState( );
    const [storycomplexity,setstorycomplexity]=useState('');
    const [noofuserstories,setnoofuserstories]=useState('');
    React.useEffect(() => {
      localStorage.setItem('storysizeInLocalStorage', storysize);
      localStorage.setItem('storycomplexityInLocalStorage', storycomplexity);
      localStorage.setItem('noofuserstories', noofuserstories);
      console.log(localStorage.getItem(props.storypoints));

    }, [storycomplexity,storysize,noofuserstories]);
   
    return ( 
            <form >

                <div className="story-size">
             <p> USER STORY SIZE: {storysize}</p>
            <p>
               <p>1. A very small story representing a tiny effort level work of only few hours</p>
               <p>2. Work of roughly a day or two days</p>
               <p>3. A moderately large story which  is two to five days of work</p>
               <p>4. A very large story which takes more than a week of work need to broken into small stories</p>
               <p>5. An extermely large story and it is too large to estimate.. it can be seperated into new project</p>

            </p>
            <select id = "dropdown" value={storysize} onChange={(e)=>{setstorysize(e.target.value)
            }}>
                <option value="NA">NA</option>
               <option value="1">1</option>
                 <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              <option value="5">5</option>
           

             </select>
             </div>
           
             <div className="story-complexity">
           <p>USER STORY COMPLEXITY : {storycomplexity} </p>
           <p>

              <p> 1. Requires basic programming skills to complete </p> 
            <p>   2. Requires basic intermediate programming skills to complete</p> 
             <p>  3. Moderately complex</p> 
             <p>  4. Very Complex , Senior level programming</p> 
             <p>  5. Extremely complex, requires extensive research</p> 
           </p>
            <select id = "dropdown" value={storycomplexity} onChange={
                (e)=>{setstorycomplexity(e.target.value)}}>
                <option value="NA">NA</option>
               <option value="1">1</option>
                 <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              <option value="5">5</option>
        
             </select>
             </div>
           
            <p>Calculated effort :  {storysize*storycomplexity}</p>  
           
                Enter sub user stories: 
                <input type="text" placeholder="1-5 range" value={noofuserstories} onChange={(e)=>{setnoofuserstories(e.target.value)}}/>

                <p>Total intial effort:  {storysize*storycomplexity*noofuserstories}</p>

                <Link to='/OptVel'>
                <button>next</button>
                </Link>



              
                
             </form>
        
     );
}
 
export default Userstory;
