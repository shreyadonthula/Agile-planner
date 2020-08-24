import React, { Component ,useState} from 'react'
import {Link} from 'react-router-dom'
const OptVel = () => {
    const [TeamComposition,setTeamComposition]=useState('');
    const[Process,setProcess]=useState('');
    const [TeamDynamics,setTeamDynamics]=useState('');
    const [EnvironmentalFactors,setEnvironmentalFactors]=useState('');
    const [Relocation,setRelocation]=useState('');
    const [TeamChanges,setTeamChanges]=useState('');
    const [vel,setvel]=useState('');

    return ( 
        <form>
        <div>


        Intial velocity:
     <input type="text" value={vel} onChange={(e)=>{setvel(e.target.value)}}/>
            <p>DECELERATING FACTORS:</p>
            <p>Team Dynamics</p>
            <select id = "dropdown" value={TeamDynamics} onChange={
                (e)=>{setTeamDynamics(e.target.value)}}>
                <option value="NA">NA</option>
               <option value="0.85">Very Highly Volatile</option>
                 <option value="0.91">Highly Volatile</option>
                <option value="0.98">Volatile</option>
                <option value="1">Stable</option>
            
             </select>

             <p>Process</p>
            <select id = "dropdown" value={Process} onChange={
                (e)=>{setProcess(e.target.value)}}>
                <option value="NA">NA</option>
                <option value="0.89">Very Highly Volatile</option>
                 <option value="0.94">Highly Volatile</option>
                <option value="0.98">Volatile</option>
                <option value="1">Stable</option>
                          
               </select> 
               
               
               
                <p>TeamComposition</p>
            <select id = "dropdown" value={TeamComposition} onChange={
                (e)=>{setTeamComposition(e.target.value)}}>
                <option value="NA">NA</option>
                <option value="0.91">Very Highly Volatile</option>
                 <option value="0.95">Highly Volatile</option>
                <option value="0.99">Volatile</option>
                <option value="1">Stable</option>
                         </select> 
             
             
             
              <p>Environmental Factors</p>
            <select id = "dropdown" value={EnvironmentalFactors} onChange={
                (e)=>{setEnvironmentalFactors(e.target.value)}}>
                <option value="NA">NA</option>
                <option value="0.96">Very Highly Volatile</option>
                 <option value="0.98">Highly Volatile</option>
                <option value="0.99">Volatile</option>
                <option value="1">Stable</option>
            
            
        
             </select>  <p>Relocation</p>
            <select id = "dropdown" value={Relocation} onChange={
                (e)=>{setRelocation(e.target.value)}}>
                <option value="NA">NA</option>
                <option value="0.98">Very Highly Volatile</option>
                 <option value="0.99">Highly Volatile</option>
                <option value="0.99">Volatile</option>
                <option value="1">Stable</option>
            
            
        
             {/* </select>  <p>Team Dynamics</p>
            <select id = "dropdown" value={TeamComposition} onChange={
                (e)=>{setTeamComposition(e.target.value)}}>
                <option value="NA">NA</option>
               <option value="Very Highly Volatile">0.85</option>
                 <option value="Highly Volatile">0.91</option>
                <option value="Volatile">0.98</option>
                <option value="Stable">1</option>
             */}
        
             </select>  <p>Team Changes</p>
            <select id = "dropdown" value={TeamChanges} onChange={
                (e)=>{setTeamChanges(e.target.value)}}>
                <option value="NA">NA</option>
                <option value="0.91">Very Highly Volatile</option>
                 <option value="0.95">Highly Volatile</option>
                <option value="0.98">Volatile</option>
                <option value="1">Stable</option>
            
        
             </select>
   
             <p>Calculated Dynamic Forces:  {TeamComposition*Process*TeamDynamics*EnvironmentalFactors*Relocation*TeamChanges}</p>

            <p>Final Velocity:  {vel-TeamComposition*Process*TeamDynamics*EnvironmentalFactors*Relocation*TeamChanges}</p>
        </div>

        <Link to='/Rt'>
                <button>next</button>
                </Link>
        </form>
     );
}
 
export default OptVel;