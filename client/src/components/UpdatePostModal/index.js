import React, { useState, useEffect} from "react";
import {Grommet, Form, FormField, Box, Button, TextInput, Layer } from "grommet";
import api from "../../utils/api";

function UpdateModal({id}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [show, setShow] = useState("");


  useEffect(() => {
    api.getPost({id})
    .then(res => {console.log(res)})
    .then(console.log("testpoint"))
    .then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .updatePost(id, {title, body})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // href={`/feed/${post._id}`}

  return (
    <Grommet>
    <Button label="Update" onClick={() => setShow(true)} />
      {show && (

      <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
      <Box background="#C0C0C0" pad="medium" gap="small" width="medium">
      <Form onSubmit={handleSubmit}>
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
      <Button type="submit" primary label="Submit" onClick={() => setShow(false)} />
      </Box>
    </Form>
    </Box>
    </Layer>
    )}

    </Grommet>
  );
}

export default UpdateModal;