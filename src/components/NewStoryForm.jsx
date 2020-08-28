import React, { useContext,useState} from 'react'
import { Storycontext } from './Storycontext';
const NewStoryForm = () => {
    const  {dispatch} = useContext(Storycontext);
    const [storytitle,setstorytitle]=useState('');
    const [description,setdescription]=useState('');
    const submit=(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_STORY',story:
        {storytitle,description}
        });
        setdescription('');
        setstorytitle('');
     }
    return ( 
        <div>
            <form onSubmit={submit} >
            <input type="text" value={storytitle} placeholder=" title" onChange={(e)=>setstorytitle(e.target.value)} required/>
            <input type="text" value={description} placeholder=" description" onChange={(e)=>setdescription(e.target.value)} />
            <input type="submit" value="ADD"/>
            </form>
        </div>
     );
}
 
export default NewStoryForm;
