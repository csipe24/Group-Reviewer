import React, { useRef } from 'react'
import { Grommet, Form, FormField, Box, Button, TextInput, Heading } from 'grommet'
import api from '../../utils/api'

function UserForm () {
  const newUserRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    // dispatch({ type: LOADING });
    api.newUser({
      newUser: newUserRef.current.value
    })
      .catch(err => console.log(err))
    newUserRef.current.value = ''
  }

  return (
    <Grommet plain>
      <Box round="small" width="medium" background="#FFAA15" margin={{"top":"25px", "bottom":"15px"}} alignContent="center" justify="center">
      <Box direction="row"  margin="medium">
        <Heading color="black" textAlign="center" level="2" size="medium">Add User</Heading>
      </Box>
      <Box direction="row" justify="center" background="doc" pad="small">
       <Box>
        <Form justify="center" onReset={event => console.log(event)} onSubmit= {handleSubmit}>
           <FormField label="Add New User" size="small">
              <TextInput
                ref={newUserRef}
                required
              />
            </FormField>
           
          <Box width="medium" name="body">
          </Box>
          <Box direction="row" justify="center" gap="medium">
            <Button type="submit" primary label="Submit" color="#00739D" />
            <Button type="reset" label="Reset" color="#00739D" />
          </Box>
        </Form>
        </Box>
      </Box>
      </Box>
    </Grommet>
  )
}

export default UserForm
