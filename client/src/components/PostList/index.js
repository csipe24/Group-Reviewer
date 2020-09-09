import React, {useEffect} from "react";
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button, Heading, Meter} from "grommet";
import { useStoreContext } from "../../utils/GlobalState";
import { Favorite, ShareOption } from 'grommet-icons';
import api from "../../utils/api";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import VotingBar from "../VotingBar";

function PostList() {
  const [state, dispatch] = useStoreContext();

  const getAllPosts = () => {
    dispatch({ type: LOADING });
    api.getPosts()
    // .then(results => console.log(results.data))
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      // .then(console.log("Testing"))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const removePost = (id) => {
    console.log("test remove")
    console.log(id)
    api.removePost(id).then( () => {
      dispatch({
        type: REMOVE_POST,
        _id: id
      })
    })  .catch(err => console.log(err));
  }


  return (
    <Grommet plain>
      <Box>
    {state.posts.length ? (   
      <Box >
        {state.posts.slice(0).reverse().map(post => (
      <Card key={post._id}  width="medium" background="light-1" margin="medium" >
      <CardHeader pad="small">Title:{post.title}</CardHeader>
      <CardHeader pad="small">Member:{post.author}</CardHeader>
      <CardBody pad="small">{post.body}</CardBody>
      <CardFooter pad={{horizontal: "medium"}} background="light-2">   
      <VotingBar/> 
      <Button
      primary label="Delete" onClick={() => removePost(post._id)}
      />
      </CardFooter>
      </Card>
    ))}
    </Box>
    ) : (
      <Heading>No Posts</Heading>
    )}

    </Box>
    </Grommet>
  );
}

export default PostList;


