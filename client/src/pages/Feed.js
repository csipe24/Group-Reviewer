import React from 'react';
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";

function Feed(){
    return(
        <div>
            <PostForm/>
            <br/>
            <PostsList/>
        </div>
    )
}

export default Feed;