import React from 'react';

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <h1>Welcome to the Group Reviewer!</h1>
            {/* If User has not authenticated, route to login page */}
            {/* If User has authenticated */}
            <h1>Select Group</h1>
        </div>
    )
}

export default Home;