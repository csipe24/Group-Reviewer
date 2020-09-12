import React, { useRef, useState } from 'react'
import { Grommet, Form, FormField, Box, Button, TextInput, Heading } from 'grommet'
import { useStoreContext } from '../../store'
import api from '../../utils/api'
// import { useIsAuthenticated } from '../../utils/auth'
import { ADD_POST } from '../../store/actions'

function PostForm ({groupId}) {
  // const isAuth = useIsAuthenticated()
  const titleRef = useRef()
  const bodyRef = useRef()
  const [state, dispatch] = useStoreContext()

  const author = state.user.userName

  const handleSubmit = e => {
    e.preventDefault()
    // dispatch({ type: LOADING });
    api.newPost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: author,
      likes: 0,
      dislikes: 0,
      groupName: groupId
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        })
      })
      .catch(err => console.log(err))

    titleRef.current.value = ''
    bodyRef.current.value = ''
  }

  return (
    <Grommet theme={{ global: { colors: { doc: '#CCCCCC' } } }}>

      <Box pad="small" round="small" direction="row" justify="center" background="#FFAA15" margin="medium">
        <Form onReset={event => console.log(event)} onSubmit= {handleSubmit}>
          <Box width="medium">
            <FormField label="Title" name="Title">
              <TextInput
                ref={titleRef}
                validate={[
                  { regexp: /^[a-z]/i },
                  name => {
                    if (name && name.length < 5) return 'Oops, Title must be > 5 letters'
                    return undefined
                  }]}
                required
              />
            </FormField>
          </Box>
          <Box width="medium" name="body">
            <FormField label="Body">
              <TextInput
                ref={bodyRef}
                required
              />
            </FormField>
          </Box>
          <Box direction="row" justify="center" gap="medium">
            <Button type="submit" primary label="Submit" color="#00739D"/>
            <Button type="reset" label="Reset" color="#00739D" />
          </Box>
        </Form>
      </Box>
    </Grommet>
  )
}

export default PostForm
