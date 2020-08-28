import React,{useState} from 'react';
const Rt = () => {
    const [ct,setct]=useState('');
    const [tec,settec]=useState('');
    const [nstc,setnstc]=useState('');
    const [ttp,setttp]=useState('');
    return (
        <form> 
        <div>
            <p>Choose Change Type</p>
            <select id = "dropdown" value={ct} onChange={
                (e)=>{setct(e.target.value)}}>
                <option value="NA">NA</option>
               <option value="3">Requirement</option>
                 <option value="2">Design</option>
                <option value="1">Code</option>
              </select>

             <p>Test Execution Complexity</p>
            <select id = "dropdown" value={tec} onChange={
                (e)=>{settec(e.target.value)}}>
                <option value="NA">NA</option>
               <option value="1">Low</option>
                 <option value="2">Medium</option>
                <option value="3">High</option>
                
            
             </select> <p>No. of selected test cases</p>
            <select id = "dropdown" value={nstc} onChange={
                (e)=>{setnstc(e.target.value)}}>
                <option value="NA">NA</option>
               <option value="1">Few</option>
                 <option value="2">Some</option>
                <option value="3">All</option>
                
            
             </select>

             <p>Testing Team Productivity</p>
            <select id = "dropdown" value={ttp} onChange={
                (e)=>{setttp(e.target.value)}}>
                <option value="NA">NA</option>
               <option value="3">Experienced</option>
                 <option value="2">Mediocre</option>
                <option value="1">Inexperienced</option>
                
            
             </select>
            <p> Effort Estimation for Regression Testing per iteration: {((ct*nstc)+tec)/ttp}</p>
        </div>
        </form>
     );
}
 
export default Rt;