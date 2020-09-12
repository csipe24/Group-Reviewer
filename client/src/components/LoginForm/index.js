import React, { useRef } from 'react'
import { Grommet, Form, FormField, Box, Button, TextInput, Heading } from 'grommet'
import { Hide, View } from 'grommet-icons'
import { useLogin } from '../../utils/auth'

function LoginForm () {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [value, setValue] = React.useState('')
  const [reveal, setReveal] = React.useState(false)

  const login = useLogin()

  const handleSubmit = (event) => {
    event.preventDefault()
    const loginEmail = emailRef.current.value
    const loginPassword = passwordRef.current.value

    login({ email: loginEmail, password: loginPassword })
      // .then(userAuth => console.log(userAuth))
      .catch(errors => errors)

    emailRef.current.value = ''
    passwordRef.current.value = ''
  }

  return (
    <Grommet>
      <Box direction="row" justify="center" margin={{ top: 'medium' }} pad="small">
        <Heading justify="center" size="small">Login</Heading>
      </Box>
      <Box fill align="center" alignContent="center" >
        <Form 
          onReset={event => console.log(event)} 
          onSubmit= {handleSubmit}
        >
          <FormField>
            <TextInput
              placeholder="Email"
              name="email"
              type="email"
              required 
              ref={emailRef}
              validate={[
                { regexp: /^[a-z]/i },
                name => {
                  if (name && name.length < 5) return 'Oops, Title must be > 5 letters'
                  return undefined
                }]}
              required
            />
          </FormField>
          <Box 
            width="flex"
            direction="row"
            margin="medium"
            align="center"
          >
            <FormField>
              <TextInput
                plain
                name="password"
                placeholder = "Password"
                type={reveal ? 'text' : 'password'}
                value={value}
                onChange={event => setValue(event.target.value)}
                required
                ref={passwordRef}
                required
              />
            </FormField>
            <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
            />
          </Box>
          <Box direction="row" justify="center" gap="medium" pad={{bottom:"small"}}>
            <Button type="submit" primary label="Login" color="#00739D" />
            <Button type="reset" label="Register" href="/register" color="#00739D"/>
          </Box>
        </Form>
      </Box>
   
    </Grommet>
  )
}

export default LoginForm
