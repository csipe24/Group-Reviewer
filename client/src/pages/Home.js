import React from 'react';
import { backgroundImages } from 'polished';
import UserInfo from '../components/UserProfileInfo';
import UserInfoGlobal from '../components/UserProfileInfoGlobal';

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <h1>Welcome to the Group Reviewer!</h1>
            <UserInfoGlobal/>
        </div>
    )
}

export default Home;