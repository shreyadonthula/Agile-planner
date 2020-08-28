import {v1 as uuid} from 'uuid'
import React from 'react';
export const Storyreducer =(state,action)=>{
    switch(action.type){
        case 'ADD_STORY':
            
            return [...state,{
                 storytitle:action.story.storytitle,
                description:action.story.description,
                id:uuid()
              }]

        case 'REMOVE_STORY':
            return state.filter(story=>story.id!==action.id)
            default:
                return state
    }
}