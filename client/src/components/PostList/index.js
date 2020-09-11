import React, { useEffect, useState } from 'react'
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button, Heading } from 'grommet'
import { useStoreContext } from '../../store/index'
// eslint-disable-next-line no-unused-vars
import { Favorite, ShareOption } from 'grommet-icons'
import api from '../../utils/api'
import { REMOVE_POST, SET_POSTS, LOADING } from '../../store/actions'
import VotingBar from '../VotingBar'
import UpdateModal from '../UpdatePostModal'

function PostList () {
  const [state, dispatch] = useStoreContext()

  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')

  const [editPostID, setEditPostID] = useState('')

  // if post id matches then

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

  const removePost = (id) => {
    console.log(id)
    api.removePost(id).then(() => {
      dispatch({
        type: REMOVE_POST,
        _id: id
      })
    }).catch(err => console.log(err))
  }

  const closeModal = () => {
    setEditPostID('')
  }

  return (
    <Grommet plain>
      <Box>
        {state.posts.length ? (
          <Box >
            {state.posts.slice(0).reverse().map(post => (
              <Card key={post._id} width="medium" background="light-1" margin="medium" >
                <CardHeader pad="small">Title:{post.title}</CardHeader>
                <CardHeader pad="small">Member:{post.author}</CardHeader>
                <CardBody pad="small">{post.body}    <VotingBar post={post}/>
                </CardBody>
                <CardFooter pad={{ horizontal: 'medium' }} background="light-2">

                  <Button
                    primary label="Delete" onClick={() => removePost(post._id)}
                    color="#00739D"
                  />
                  <Button label="Update"
                    color="#00739D"
                    onClick={() => { setEditPostID(post._id) }}/>
                  {post._id === editPostID && (
                    <UpdateModal post={post} closeModal={closeModal}/>
                  )}
                </CardFooter>
              </Card>
            ))}
          </Box>
        ) : (
          <Heading>No Posts</Heading>
        )}

      </Box>
    </Grommet>
  )
}

export default PostList
