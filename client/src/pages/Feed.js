import React from 'react';
import Navbar from "../components/Navbar";
import PageFooter from "../components/Footer";
import PostForm from "../components/Form";
import PostsList from "../components/PostsList";

function Feed(){
    return(
        <div>
            <Navbar/>
            <h1>Welcome To Your Feed</h1>
            <h1>New Post</h1>
            <PostForm/>
            <br/>
            <h1>Posts</h1>
            <PostsList/>
            <PageFooter/>
      
        </div>
    )
}

export default Feed;