import React, {useEffect} from "react";
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button, Heading, List} from "grommet";
import { useStoreContext } from "../../utils/GlobalState";
import { Favorite, ShareOption } from 'grommet-icons';
import api from "../../utils/api";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";

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
      .then(console.log("Testing"))
      .then(console.log(state.posts))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllPosts();
  }, []);


  return (
    <Grommet plain>
      <Box>
    {state.posts.length ? (   
      <Box >
        {state.posts.map(post => (
      <Card key={post._id}  width="medium" background="light-1" margin="medium" >
      <CardHeader pad="small">{post.title}</CardHeader>
      <CardHeader pad="small">{post.author}</CardHeader>
      <CardBody pad="small">{post.body}</CardBody>
      <CardFooter pad={{horizontal: "small"}} background="light-2">   
      <Button
      icon={<Favorite color="red" />}
      hoverIndicator
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


