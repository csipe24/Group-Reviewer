import React from 'react';
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";


function Feed(){
    return(
        <div>
            <PostForm/>
            <PostsList/>
        </div>
    )
}

export default Feed;