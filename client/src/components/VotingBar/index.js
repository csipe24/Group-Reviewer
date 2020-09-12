import React, { useState } from 'react'
import { Grommet, Button, Meter, Heading, Box, Stack } from 'grommet'
import { Like, Dislike } from 'grommet-icons'
import { useStoreContext } from '../../store/index'
import api from '../../utils/api'
import {UPDATE_POST} from '../../store/actions'

function VotingBar ({post}) {
  const [state, dispatch] = useStoreContext()
    // eslint-disable-next-line react/prop-types
    const [postLikes, setPostLikes] = useState(post.likes)
    const [postDislikes, setPostDislikes] = useState(post.dislikes)
    const [active, setActive] = useState();

    const [likeActive, setLikeActive] = useState();
    const [dislikeActive, setDislikeActive] = useState();
  
  const updateLikes = (id) => {
    api.updateLikes(id, {likes:postLikes})
      .then((res) => {
        console.log(res.data)
        setPostLikes(res.data.likes)
        setLikeActive(true)
        dispatch({
          type: UPDATE_POST,
          post: res.data
        })
      })
      .catch((err) => console.log(err))
  }

  const updateLikesMinus = (id) => {
    api.updateLikesMinus(id, {likes:postLikes})
      .then((res) => {
        console.log(res.data)
        setPostLikes(res.data.likes)
        setLikeActive(false)
        dispatch({
          type: UPDATE_POST,
          post: res.data
        })
      })
      .catch((err) => console.log(err))
  }

  const updateDislikes = (id) => {
    api.updateDislikes(id, {dislikes:postDislikes})
      .then((res) => {
        console.log(res.data)
        setPostDislikes(res.data.dislikes)
        setDislikeActive(true)
        dispatch({
          type: UPDATE_POST,
          post: res.data
        })
      })
      .catch((err) => console.log(err))
  }

  const updateDislikesMinus = (id) => {
    api.updateDislikesMinus(id, {dislikes:postDislikes})
      .then((res) => {
        console.log(res.data)
        setPostDislikes(res.data.dislikes)
        setDislikeActive(false)
        dispatch({
          type: UPDATE_POST,
          post: res.data
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <Grommet>
      <Box direction="row" justify="evenly">
      </Box>
      <Box align="center" pad="medium">
      <Stack anchor="center">
      <Meter
        type="circle"
        background="#FFAA15"
        size="small"
        thickness="medium"
        values={[
          {
            value: postDislikes,
            color: '#FF4040',
            label: 'Dislikes',
            onHover: over => {
              setActive(over? postDislikes : "")
            }
          },
          {
            value: postLikes,
            color: "#00C781",
            label: 'Likes',
            onHover: over => {
              setActive(over? postLikes : "");
            }
          }
          
        ]}
      />
       <Box align="center">
            <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
            {!active ? (
            <div>
            {!likeActive ? (<Button onClick={() => updateLikes(post._id)} icon={<Like/>} hoverIndicator/>):(<Button onClick={() => updateLikesMinus(post._id)} icon={<Like/>} hoverIndicator/>)}
            {!dislikeActive ? (<Button onClick={() => updateDislikes(post._id)} icon={<Dislike/>} hoverIndicator/>):(<Button onClick={() => updateDislikesMinus(post._id)} icon={<Dislike/>} hoverIndicator/>)}
            
            </div>
            ) : <Heading
              color="#FFAA15">
              {active}
              </Heading>
            }
            </Box>
        </Box>

        {/* <Box align="left">
        <Heading
          align="start"
          value={postLikes}
          color="green">
          {post.likes}
        </Heading>
        </Box> */}
      </Stack>
    
 

      </Box>

      <Box direction="row" gap="300px" justify="evenly" >
 
      </Box>
     
    </Grommet>
  )
}

export default VotingBar
