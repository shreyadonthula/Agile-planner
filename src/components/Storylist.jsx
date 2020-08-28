import React, { useContext} from 'react'
import { Storycontext } from './Storycontext';
const Storylist = () => {
    const {stories} = useContext(Storycontext);
    const {dispatch}=useContext(Storycontext);

    return stories.length ? (
        <div className="story-list">
            <ul>
                {
                    stories.map(story=>{
                        return(

                            <li onClick={()=>dispatch({type:'REMOVE_STORY',id:story.id})}>
                            <div className="storytitle">{story.storytitle}</div>
                            <div className="description">{story.description}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
      ):(
          <div classname="empty"></div>
      )
}
 
export default Storylist;


// <ul>
// {
//     stories.map(story=>{
//         return(<StoryDetails story={story} key={story.id}/>)
//     })
// }
// </ul>