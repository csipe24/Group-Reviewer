import React, {useEffect} from 'react'
// import { ListItem, List } from "../List";
// import { Link } from "react-router-dom";
import Post from '../PostList'
import { Grommet, Heading, Box } from 'grommet'
import { useStoreContext } from '../../store/index'
import { SET_POSTS, LOADING } from '../../store/actions'
import api from '../../utils/api'
// import { Home } from 'grommet-icons';

function FeedList () {
  const [state, dispatch] = useStoreContext()
  
  // const getAllGroupPosts = () => {
  //   dispatch({ type: LOADING })
  //   api.groupPost()
  //   // .then(results => console.log(results.data))
  //     .then(results => {
  //       dispatch({
  //         type: SET_POSTS,
  //         posts: results.data
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  const getAllPosts = () => {
    dispatch({ type: LOADING })
    api.getPosts()
    // .then(results => console.log(results.data))
      .then(results => {
        dispatch({
          type: SET_POSTS,
          posts: results.data
        })
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllPosts()
  }, [])

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
