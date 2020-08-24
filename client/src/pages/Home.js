import React from 'react';
import Navbar from "../components/Navbar";
import PageFooter from "../components/Footer";
import PostForm from "../components/Form"


function Home(){
    return(
        <div>
            <Navbar/>
            <h1>Home Page</h1>
            <h1>Welcome to the Group Reviewer!</h1>
            <PostForm/>
            <PageFooter/>
        </div>
    )
}

export default Home;