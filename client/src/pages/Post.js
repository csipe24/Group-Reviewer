import React, { useState, useEffect, useRef } from "react";
import { Form, FormField, Box, Button, TextInput } from "grommet";
import api from "../utils/api";
import { useParams } from "react-router-dom";

function Post() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const postTitle = useRef();
  const postBody = useRef();

  const { id } = useParams();

  useEffect(() => {
    api.getPost(id).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .updatePost(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <Form onReset={(event) => console.log(event)} onSubmit={handleSubmit}>
      <Box width="medium">
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
            ref={postTitle}
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
            ref={postBody}
          />
        </FormField>
      </Box>
      <Box direction="row" justify="center" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
}

export default Post;
