import React from 'react';
import Navbar from "../components/Navbar";
import PageFooter from "../components/Footer";



function Home(){
    return(
        <div>
            <Navbar/>
            <h1>Home Page</h1>
            <h1>Welcome to the Group Reviewer!</h1>
            {/* If User has not authenticated, route to login page */}
            {/* If User has authenticated */}
            <h1>Select Group</h1>
            <PageFooter/>
        </div>
    )
}

export default Home;