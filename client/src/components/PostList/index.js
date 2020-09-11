import React, { useEffect, useState } from 'react'
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button, Heading } from 'grommet'
import { useStoreContext } from '../../store/index'
// eslint-disable-next-line no-unused-vars
import { Favorite, ShareOption } from 'grommet-icons'
import api from '../../utils/api'
import { REMOVE_POST } from '../../store/actions'
import VotingBar from '../VotingBar'
import UpdateModal from '../UpdatePostModal'

function PostList () {
  const [state, dispatch] = useStoreContext()

  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')

  const [editPostID, setEditPostID] = useState('')

  // if post id matches then

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
              <Card key={post._id} width="medium" background="light-1" margin="40px" >
                <CardHeader align="center" direction="column" gap="none">
                  <Heading color="black" level="2">{post.title}</Heading>
                  <Heading  margin={{ top: 'none' }} color="silver" level="3">{post.author}</Heading>
                </CardHeader>
             
                <CardBody  pad="small">
                <Heading textAlign="center" margin={{ top: 'none' }}  color="black" level="5">{post.body}</Heading>
                <VotingBar post={post}/>
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
