import React from "react";
import { Grommet, Form, FormField, Box, Button, TextInput, Heading } from 'grommet';
// import { useTodoContext } from "../utils/GlobalState";
import api from "../../utils/api";
import { useLogin } from "../../utils/auth";

function PostForm() {
//   const inputRef = useRef();
//   const [_, dispatch] = useTodoContext();

//   function handleSubmit(e) {
//     e.preventDefault();

//     dispatch({
//       type: "add",
//       name: inputRef.current.value
//     });
//     inputRef.current.value = "";
//   }

  return (
    <Grommet plain>
      <Box direction="row" justify="center" margin={{ top: 'medium' }}>
      <Heading justify="center" size="medium">Group x</Heading>
      </Box>

        <Box direction="row" justify="center" margin={{ top: 'medium' }}>
        <Heading justify="center" size="small">New Post</Heading>
        </Box>

        <Box direction="row" justify="center" margin={{ top: 'medium' }}>
          <Form
            onReset={event => console.log(event)}
            onSubmit={( {value} ) =>
             api.newPost({ title:value.title, author:"test", body:value.body})
             .then(console.log({ title:value.title, body:value.body}))
            //  .then(() => (getPosts))
             .catch(e=>{console.log(e)})}
             >
            <FormField 
            name="title" 
            htmlfor="text-input-id" 
            label="Title"
            required
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length < 5) return "Oops, Title must be > 5 letters";
                return undefined;
              }
            ]}>
            </FormField>
            <FormField 
            name="body" 
            htmlfor="text-input-id" 
            label="Body"
            required
            >
            </FormField>

            <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
            </Box>
          </Form>
      </Box>
    </Grommet>
  );
}

export default PostForm;
