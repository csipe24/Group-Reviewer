import React from 'react'
// eslint-disable-next-line no-unused-vars
import { backgroundImages } from 'polished'
import UserInfoGlobal from '../components/UserProfileInfoGlobal'
import GroupForm from '../components/GroupForm'
import GroupList from '../components/GroupList'

function Home () {
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Welcome to the Group Reviewer!</h1>
      <UserInfoGlobal/>
      <GroupForm/>
      <GroupList />
    </div>
  )
}

export default Home
