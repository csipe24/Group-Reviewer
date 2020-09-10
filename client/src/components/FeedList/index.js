import React from 'react'
// import { ListItem, List } from "../List";
// import { Link } from "react-router-dom";
import Post from '../PostList'
import { Grommet, Heading, Box } from 'grommet'
// import { Home } from 'grommet-icons';

function FeedList () {
  return (
    <Grommet plain>
      <Box direction="row" justify="center" margin={{ top: 'medium' }}>
        <Heading>Newest Posts</Heading>
      </Box>
      <Post/>
    </Grommet>
  )
}

export default FeedList
