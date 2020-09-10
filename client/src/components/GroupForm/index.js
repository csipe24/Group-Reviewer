import React, { useRef } from 'react'
import { Grommet, Form, FormField, Box, Button, TextInput, Heading } from 'grommet'
import api from '../../utils/api'
import { SET_GROUP_NAME } from '../../store/actions'
import { useStoreContext } from '../../store'

function GroupForm () {
  const groupNameRef = useRef()
  const [, dispatch] = useStoreContext()

  const handleSubmit = e => {
    e.preventDefault()
    // dispatch({ type: LOADING });
    api.newGroup({
      groupName: groupNameRef.current.value
    })
      .then(result => {
        dispatch({
          type: SET_GROUP_NAME,
          groupName: result.data
        })
      })
      .catch(err => console.log(err))
    groupNameRef.current.value = ''
  }

  return (
    <Grommet plain>
      <Box direction="row" margin={{ top: 'medium' }}>
        <Heading textAlign="center" level="2" size="medium">Enter a Group Name</Heading>
      </Box>
      <Box direction="row" justify="center" background="doc" margin={{ top: 'medium' }}>
        <Form onReset={event => console.log(event)} onSubmit= {handleSubmit}>
          <Box width="medium">
            <FormField label="Title">
              <TextInput
                ref={groupNameRef}
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
          </Box>
          <Box direction="row" justify="center" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
      </Box>
    </Grommet>
  )
}

export default GroupForm
