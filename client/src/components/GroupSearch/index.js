import React, { useRef, useState } from 'react'
import { Grommet, Form, FormField, Box, Button, TextInput, Heading, Card, Stack, CardHeader, CardBody} from 'grommet'
import api from '../../utils/api'
import { Link } from "react-router-dom"
import { useStoreContext } from '../../store'
import { GET_GROUP_SEARCH } from '../../store/actions'

function GroupSearch () {
  const groupSearch = useRef()
  const [state, dispatch] = useStoreContext()
  const [search, setSearch] = useState(false);
  // const newUserRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    api.getGroupsByName( groupSearch.current.value )
    .then(results => {
      console.log(results.data)
      setSearch(true)
        dispatch({
          type: GET_GROUP_SEARCH,
          groupSearch: results.data[0]
        })
    })
      .catch(err => console.log(err))

    groupSearch.current.value = ''
  }

  const addUserToGroup = (id) => {
    console.log("Testing Add User ID")
    console.log(id)
    api.addUserToGroup(id, {users: state.user._id})
    .then((res)=>{
      console.log(res.data)
      // dispatch({
      //   type: UPDATE_GROUP_USERS,
      //   post: res.data
      // })
    })
    .catch(err => console.log(err))
  }

  return (
    <Grommet plain>
      <Box round="small" width="medium" background="#CCCCCC" margin={{"top":"25px", "bottom":"15px"}} alignContent="center" justify="center">
      <Box margin="medium" alignContent="center">
      <Heading color="black" alignSelf="center" level="2" size="medium">Group Search</Heading>
       <Box direction="row" justify="center" background="doc" pad="small">
       <Box>
        <Form justify="center" onReset={event => console.log(event)} onSubmit={handleSubmit}>
          <FormField size="small"> <TextInput ref={groupSearch} required placeholder="Enter Group Name" color="white"/></FormField>
            <Box direction="row" justify="center" gap="medium">
            <Button type="submit" primary label="Search" color="#00739D" />
            </Box>
        </Form>
       </Box>
       </Box>
      </Box>
      </Box>

      <Box>
        {search ? (
           <Box>
           {state.groupSearch != undefined  ? (
                  <Card key={state.groupSearch._id} background="light-1" margin="medium" alignContent="center">
                 
                  <CardHeader  pad="small">
                  <Heading color="black">{state.groupSearch.groupName}</Heading>
                  </CardHeader>
            
                   <CardBody alignContents="center" pad={{ horizontal: 'medium' }} background="light-2">
                   <Box alignContent="center" direction="column">
                   <Link alignContent="center" to={"/group/" + state.groupSearch._id} onClick={()=>{addUserToGroup(state.groupSearch._id)}}> 
                   <Heading level="4" color="#FFAA15">Go to Posts</Heading>
                   </Link>
                   </Box>
                   </CardBody>
 
                 </Card>
           ):(
            <Heading></Heading>
           )}
      
           </Box>

        ) : (    <Heading></Heading>)}

         
      
      </Box>

    </Grommet>
  )
}

export default GroupSearch
