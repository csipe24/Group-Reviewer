import React from 'react'
import GroupForm from '../components/GroupForm'
import GroupList from '../components/GroupList'
import { Grommet, Heading, Box } from 'grommet'
import GroupSearch from '../components/GroupSearch'


function Home () {
  return (
    <Grommet >
      <Box align="center" >
      <Heading>Hub</Heading>
      {/* Move to another grid  */}
      <GroupSearch/>
      <GroupForm />
      <GroupList />
      </Box>
    </Grommet>
  )
}

export default Home
