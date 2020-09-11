import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useStoreContext } from "../store"
import { LOADING, SET_POSTS } from "../store/actions"
import api from "../utils/api"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"

function GroupPosts(){
    const [state, dispatch] = useStoreContext()
    const params = useParams()
    console.log(params.id)

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
    
      useEffect(() => {
        getAllPosts()
      }, [])

    return (
        <div>
            <PostForm groupId={params.id}/>
            <PostList />
        </div>

    )
}

export default GroupPosts;