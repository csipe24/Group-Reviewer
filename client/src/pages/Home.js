import React from 'react';
import { backgroundImages } from 'polished';
import UserInfoGlobal from '../components/UserProfileInfoGlobal';
import GroupForm from "../components/GroupForm";

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <h1>Welcome to the Group Reviewer!</h1>
            <UserInfoGlobal/>
            <GroupForm/>
        </div>
    )
}

export default Home;