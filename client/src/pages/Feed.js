import React from 'react'
import PostForm from '../components/PostForm'
import FeedList from '../components/FeedList'
import { Grommet, Box } from 'grommet'

function Feed () {
  

  return (
    <Grommet>
      <Box fill align ="center" justify="center">
        <PostForm/>

        <FeedList/>
      </Box>
    </Grommet>
  )
}

export default Feed
