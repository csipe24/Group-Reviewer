import React, { useRef } from "react";
import {
  Grommet,
  Form,
  FormField,
  Box,
  Button,
  TextInput,
  Heading,
} from "grommet";
import { useLogin } from "../../utils/auth";

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = useLogin();

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginEmail = emailRef.current.value;
    const loginPassword = passwordRef.current.value;

    console.log("Submit");
    console.log(loginEmail);
    console.log(loginPassword);

    login({ email: loginEmail, password: loginPassword })
      .then((userAuth) => console.log(userAuth))
      .catch((errors) => errors);

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <Grommet theme={{ global: { colors: { doc: "#9370DB" } } }}>
      <Box direction="row" justify="center" margin={{ top: "medium" }}>
        <Heading justify="center" size="small">
          Login
        </Heading>
      </Box>

      <Box
        direction="row"
        justify="center"
        background="doc"
        margin={{ top: "medium" }}
      >
        <Form onReset={(event) => console.log(event)} onSubmit={handleSubmit}>
          <Box width="medium">
            <FormField label="Email">
              <TextInput
                ref={emailRef}
                validate={[
                  { regexp: /^[a-z]/i },
                  (name) => {
                    if (name && name.length < 5)
                      return "Oops, Title must be > 5 letters";
                    return undefined;
                  },
                ]}
                required
              />
            </FormField>
          </Box>
          <Box width="medium" name="password">
            <FormField label="Password">
              <TextInput ref={passwordRef} required />
            </FormField>
          </Box>
          <Box direction="row" justify="center" gap="medium">
            <Button type="submit" primary label="Login" />
            <Button type="reset" label="Register" href="/register" />
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
}

export default LoginForm;
