import React, {useRef} from "react";
import { Grommet, Form, FormField, Box, Button, TextInput, TextArea, Heading } from 'grommet';
import { useStoreContext } from "../../store";
import api from "../../utils/api";
import { useIsAuthenticated } from "../../utils/auth";
import { ADD_POST } from "../../utils/actions";


function PostForm() {

  const titleRef = useRef();
  const bodyRef = useRef();
  const [state, dispatch] = useStoreContext();

  // JWT decode

  // Login Route, Token REST of Data

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch({ type: LOADING });
    api.newPost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: "test"
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
    <Grommet theme={{global: {colors:{doc: "#9370DB"}}}}>
      <Box direction="row" justify="center" margin={{ top: 'medium' }}>
      <Heading justify="center" size="medium">Group x</Heading>
      </Box>

        <Box direction="row" justify="center" margin={{ top: 'medium' }}>
        <Heading justify="center" size="small">New Post</Heading>
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
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
            </Box>
          </Form>
      </Box>
    </Grommet>
  );
}

export default PostForm;
