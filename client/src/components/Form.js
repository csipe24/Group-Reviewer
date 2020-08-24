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
            <FormField name="name" htmlfor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField name="name" htmlfor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
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
