import React, {useEffect, useState} from "react";
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button, Heading, Layer, Form, FormField, TextInput} from "grommet";
import { useStoreContext } from "../../utils/GlobalState";
import { Favorite, ShareOption } from 'grommet-icons';
import api from "../../utils/api";
import { REMOVE_POST, SET_POSTS, UPDATE_POST, LOADING } from "../../utils/actions";
import VotingBar from "../VotingBar";

function PostList() {
  const [state, dispatch] = useStoreContext();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [show, setShow] = useState("");


  const getAllPosts = () => {
    dispatch({ type: LOADING });
    api.getPosts()
    // .then(results => console.log(results.data))
      .then(results => {
        dispatch({
          type: SET_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const removePost = (id) => {
    console.log(id)
    api.removePost(id).then( () => {
      dispatch({
        type: REMOVE_POST,
        _id: id
      })
    })  .catch(err => console.log(err));
  }

  const getPostData = (id) => {
    // console.log(id);
    api.getPost(id)
    .then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  };

  const editPost = (id) => {
    api.updatePost(id, {title, body})
      .then((res) => {
        dispatch({
          type: UPDATE_POST,
          post: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grommet plain>
      <Box>
    {state.posts.length ? (   
      <Box >
        {state.posts.slice(0).reverse().map(post => (
      <Card key={post._id}  width="medium" background="light-1" margin="medium" >
      <CardHeader pad="small">Title:{post.title}</CardHeader>
      <CardHeader pad="small">Member:{post.author}</CardHeader>
      <CardBody pad="small">{post.body}    <VotingBar/> 
      </CardBody>
      <CardFooter pad={{horizontal: "medium"}} background="light-2">   
   
      <Button
      primary label="Delete" onClick={() => removePost(post._id)}
      color="#00739D"
      />
      
      
{/* Modal */}
      <Button label="Update" 
      onClick={
        () => {
        setShow(true);
        getPostData(post._id);
        }
        }/>
      {show && (
      <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
      <Box background="#C0C0C0" pad="medium" gap="small" width="medium">
      <Form onSubmit={editPost}>
      <Box flex="grow" overflow="auto" pad={{vertical: "medium"}}>
        <FormField label="Title" name="title">
          <TextInput
            value={title}
            validate={[
            { regexp: /^[a-z]/i },
            (name) => {
            if (name && name.length < 5)
              return "Oops, Title must be > 5 letters";
            return undefined;
            },
            ]}
            required
            onChange={(e) => {
            setTitle(e.target.value);
            }}
            name="title"
            />
        </FormField>
      </Box>
      <Box width="medium" name="body">
        <FormField label="Body">
        <TextInput
        value={body}
        required
        onChange={(e) => {
        setBody(e.target.value);
        }}
        />
        </FormField>
      </Box>

      <Box direction="row" justify="center" gap="medium">
      <Button type="submit" primary label="Submit" onClick={() => {
        editPost(post._id);
        setShow(false);
    
        }} />
      </Box>
    </Form>
    </Box>
    </Layer>
    )}



{/* Modal */}




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


