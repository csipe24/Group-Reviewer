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
            color: 'red',
            label: 'Dislikes',
            onHover: over => {
              setActive(over? postDislikes : "")
            }
          },
          {
            value: postLikes,
            color: "green",
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
            <Button onClick={() => updateLikes(post._id)} icon={<Like/>} hoverIndicator/>
            <Button alignSelf="end" onClick={() => updateDislikes(post._id)} icon={<Dislike/>} hoverIndicator/>
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
