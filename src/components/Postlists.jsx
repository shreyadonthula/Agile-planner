import React,{Component} from 'react';
import PostData from './posts.json'

class Postlists extends React.Component{
    render(){
        return(
            <div>
                <h2>Hi der this is postslists demo</h2>
                const {PostData} = this.props;
                const postDetails = PostData.map(values => {
                    return(
                    <li>{values.Process}</li>
                    )
                })                
            </div>
        );
    }
}

export default Postlists;