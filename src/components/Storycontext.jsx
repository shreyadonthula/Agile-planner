
import React, {createContext,useEffect, useReducer } from 'react'
import { Storyreducer } from './Storyreducer';
export const Storycontext= createContext();

const StorycontextProvider = (props) => {
       
  const [stories, dispatch] = useReducer(Storyreducer,[] ,()=>{
    const localData= localStorage.getItem('stories');
    return localData ? JSON.parse(localData) : []
  });
 
      useEffect(() => {
       localStorage.setItem('stories',JSON.stringify(stories))
         }, [stories])
        return ( 
       <Storycontext.Provider value={{stories,dispatch}}>
           {props.children}
       </Storycontext.Provider>

     );
}
 
export default StorycontextProvider;



// import React, {createContext,useState, Component } from 'react'
// import {v1 as uuid} from 'uuid';
// export const Storycontext= createContext();

// const StorycontextProvider = (props) => {
//         const [stories, setstory] = useState([
//             {storytitle:'search bar',description: 'search bar connected to db', id:1},
//             {storytitle:'login page', description:'all regarding login',id:2}
//         ])
//         const addstory=(storytitle,description)=>{
//             setstory([...stories,{storytitle,description,id:uuid()}])
//         }
//         const removestory=(id)=>{
//             setstory(stories.filter(story=>story.id!==id))
//         }
//         return ( 
//        <Storycontext.Provider value={{stories,addstory,removestory}}>
//            {props.children}
//        </Storycontext.Provider>

//      );
// }
 
// export default StorycontextProvider;