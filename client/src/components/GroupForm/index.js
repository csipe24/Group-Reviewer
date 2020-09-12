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
      <Box round="small" width="medium" background="#FFAA15" margin={{"top":"25px", "bottom":"15px"}} align="center">
      <Box direction="row">
        <Heading color="black" textAlign="center" level="2" size="medium">New Group</Heading>
      </Box>
      <Box direction="row" justify="center" background="doc" pad="small">
       <Box>
        <Form justify="center" onReset={event => console.log(event)} onSubmit= {handleSubmit}>
           <FormField label="Title" size="small">
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

export default GroupForm
