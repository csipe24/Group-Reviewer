import React, {useRef, useState} from "react";
import { Grommet, Form, FormField, Box, Button, TextInput, TextArea, Heading } from 'grommet';
import { useStoreContext } from "../../store";
import api from "../../utils/api";
import { useIsAuthenticated } from "../../utils/auth";
import { ADD_POST } from "../../utils/actions";


function PostForm() {
  const isAuth = useIsAuthenticated();
  const titleRef = useRef();
  const bodyRef = useRef();
  const [state, dispatch] = useStoreContext();

  const [author, setAuthor] = useState();

    const getUser = () =>{
      api.authenticated()
      .then(res => {
        setAuthor(res.data.userName);
      })
        .catch(err => console.log(err));
      }

    getUser();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch({ type: LOADING });
    api.newPost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: author,
      likes: 0,
      dislikes: 0
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";


  };

  

  return (
    <Grommet theme={{global: {colors:{doc: "#CCCCCC"}}}}>
      <Box direction="row"  margin={{ top: 'medium' }}>
      <Heading textAlign="center" level="2" size="medium">Food Lover Group</Heading>
      </Box>

        <Box direction="row" justify="center" background="doc" margin={{ top: 'medium' }}>
          <Form onReset={event => console.log(event)} onSubmit= {handleSubmit}>
            <Box width="medium">
            <FormField label="Title">
            <TextInput
            ref={titleRef}
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length < 5) return "Oops, Title must be > 5 letters";
                return undefined;
              }]}
            required
            />
            </FormField>
            </Box>
            <Box width="medium" name="body">
            <FormField label="Body">
            <TextInput
            ref={bodyRef}
            required
            />
            </FormField>
            </Box>
            <Box direction="row" justify="center" gap="medium">
            <Button type="submit" primary label="Submit" color="#00739D"/>
            <Button type="reset" label="Reset" color="#00739D" />
            </Box>
          </Form>
      </Box>
    </Grommet>
  );
}

export default PostForm;
