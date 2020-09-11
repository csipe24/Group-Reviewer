import React, { useState } from 'react'
import { Grommet, Button, Meter } from 'grommet'
import { Like, Dislike } from 'grommet-icons'

function VotingBar () {
  const [state, setState] = useState({
    likes: 0,
    dislikes: 0
  })

  return (
    <Grommet>
      <Button onClick={() => setState({ ...state, likes: state.likes + 1 })} icon={<Like/>} hoverIndicator/>
      <Button onClick={() => setState({ ...state, dislikes: state.dislikes + 1 })} icon={<Dislike/>} hoverIndicator/>
      <Meter
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
    </Grommet>
  )
}

export default VotingBar
