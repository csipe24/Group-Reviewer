import React, { useEffect } from 'react'
import { useStoreContext } from '../../store/index'
import api from '../../utils/api'
// eslint-disable-next-line no-unused-vars
import { GET_GROUP, REMOVE_GROUP, LOADING } from '../../store/actions'

// eslint-disable-next-line no-unused-vars
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button, Heading, Meter } from 'grommet'

function GroupList () {
  const [, dispatch] = useStoreContext()

  const getGroups = () => {
    dispatch({ type: LOADING })
    api.getGroups()
      .then(results => {
        console.log(results.data)
        //   dispatch({
        //     type: GET_GROUP,
        //     groups: results.data
        //   })
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getGroups()
  }, [])

  //   const removeGroup = (id) => {
  //     console.log(id)
  //     api.removeGroup(id).then( () => {
  //       dispatch({
  //         type: REMOVE_GROUP,
  //         _id: id
  //       })
  //     })  .catch(err => console.log(err));
  //   }

  return (
    //   <h1>Test</h1>
    <Box>
      <h1>Test Page</h1>
    </Box>
  )
}

export default GroupList
