import React, { useState } from 'react'
import { Grommet, Button, Meter, Text, Box } from 'grommet'
import { Like, Dislike } from 'grommet-icons'
import { useStoreContext } from '../../store/index'
import api from '../../utils/api'
import {UPDATE_POST} from '../../store/actions'

function VotingBar ({post}) {
  const [state, dispatch] = useStoreContext()
    // eslint-disable-next-line react/prop-types
    const [postLikes, setPostLikes] = useState(post.likes)
    const [postDislikes, setPostDislikes] = useState(post.dislikes)
  
  const updateLikes = (id) => {
    console.log(postLikes)
    api.updateLikes(id, {likes:postLikes})
      .then((res) => {
        console.log(res.data)
        setPostLikes(res.data.likes)
        dispatch({
          type: UPDATE_POST,
          post: res.data
        })
      })
      .catch((err) => console.log(err))
  }

  const updateDislikes = (id) => {
    console.log(postDislikes)
    api.updateDislikes(id, {dislikes:postDislikes})
      .then((res) => {
        console.log(res.data)
        setPostDislikes(res.data.dislikes)
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
      <Button onClick={() => updateLikes(post._id)} icon={<Like/>} hoverIndicator/>
  
      <Button alignSelf="end" onClick={() => updateDislikes(post._id)} icon={<Dislike/>} hoverIndicator/>
      
      </Box>
      <Meter
        round="true"
        type="bar"
        background="#CCCCCC"
        values= {[
          {
            value: state.likes,
            color: '#00C781',
            label: 'Likes'
          },
          {
            value: state.dislikes,
            color: '#FF4040',
            label: 'Dislikes'
          }
        ]}

      />
      <Box direction="row" gap="300px" justify="evenly" >
      
      <Text
      textAlign="start"
      value={postLikes}
      color="black">
      {post.likes}
      </Text>

      <Text
      textAlign="end"
      value={postDislikes}
      color="black">
      {post.dislikes}
      </Text>

      </Box>
     
    </Grommet>
  )
}

export default VotingBar
