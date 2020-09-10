import React, { useState, useEffect} from "react";
import {Grommet, Form, FormField, Box, Button, TextInput, Layer } from "grommet";
import api from "../../utils/api";
import { useStoreContext } from "../../store/index";
import { UPDATE_POST } from "../../store/actions";


function UpdateModal({post, closeModal}) {
  const [, dispatch] = useStoreContext();
  
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);


  const updatePost = (id) => {
    console.log(id);
    api.updatePost(id, {title, body})
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: UPDATE_POST,
          post: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layer onEsc={closeModal} onClickOutside={closeModal}>
    <Box background="#C0C0C0" pad="medium" gap="small" width="medium">
    <Form onSubmit={() => {
      updatePost(post._id);
      closeModal();
      }}>
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
      // console.log(`Testing: ${post._id}`);
      updatePost(post._id);
      closeModal();
      }} />
    </Box>
  </Form>
  </Box>
  </Layer>
  );

}

export default UpdateModal;