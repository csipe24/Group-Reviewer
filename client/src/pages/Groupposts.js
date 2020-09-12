import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useStoreContext } from "../store"
import { LOADING, SET_POSTS, GET_GROUP } from "../store/actions"
import api from "../utils/api"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"
import UserForm from "../components/NewUserForm"
import { Grommet, Box, Button, TextInput, Heading } from 'grommet'

function GroupPosts(){
    const [state, dispatch] = useStoreContext()
    const params = useParams()
    

    const getAllPosts = () => {
        dispatch({ type: LOADING })
        api.groupPost(params.id)
        // .then(results => console.log(results.data))
          .then(results => {
            dispatch({
              type: SET_POSTS,
              posts: results.data
            })
          })
          .catch(err => console.log(err))
      }

      const getGroups = () => {
        dispatch({ type: LOADING })
        api.getGroups()
          .then(results => {
              dispatch({
                type: GET_GROUP,
                groups: results.data
              })
          })
          .catch(err => console.log(err))
      }
    
    
      useEffect(() => {
        getAllPosts()
        getGroups()
      }, [])

      const currentGroupName = state.groups.filter((group)=>{
        if( group._id == params.id ) return state.groups
      })
    
    return (
        <Grommet>
           <Box direction="row" margin={{ top: 'medium' }} justify="center">
          <Heading textAlign="center" level="2" size="medium">
            {currentGroupName[0].groupName}
            </Heading>
          </Box>
           
            <PostForm groupId={params.id} />
            <PostList />
        </Grommet>

    )
}

export default GroupPosts;