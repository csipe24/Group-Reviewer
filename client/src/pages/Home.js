import React from 'react'
// eslint-disable-next-line no-unused-vars
import { backgroundImages } from 'polished'
import UserInfoGlobal from '../components/UserProfileInfoGlobal'
import GroupForm from '../components/GroupForm'
import GroupList from '../components/GroupList'
import { Grommet, Heading, Box } from 'grommet'


function Home () {
  return (
    <Grommet >
      <Box align="center" >
      <Heading>Hub</Heading>
      <GroupForm/>
      <GroupList />
      </Box>
    </Grommet>
  )
}

export default Home
