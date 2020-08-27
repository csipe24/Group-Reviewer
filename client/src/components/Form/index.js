import React, { useRef } from "react";
import { Grommet, Form, FormField, Box, Button, TextInput, Stack } from 'grommet';
// import { useTodoContext } from "../utils/GlobalState";

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
        <Stack>
        <Form>
            <FormField name="title" htmlfor="text-input-id" label="Title">
                <TextInput id="text-input-id" name="title" />
            </FormField>
            <FormField name="body" htmlfor="text-input-id" label="Body">
                <TextInput id="text-input-id" name="body" />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
        </Box>
        </Form>
        </Stack>
    </Grommet>
  );
}

export default PostForm;
