import React from 'react'
import { Grommet, Box, Form, FormField, Button, Text, Heading } from 'grommet'
import { Hide, View } from 'grommet-icons'
import api from '../../utils/api'
import { useLogin } from '../../utils/auth'

function RegisterForm () {
  const [value, setValue] = React.useState('')
  const [reveal, setReveal] = React.useState(false)

  const login = useLogin()

  return (
    <Grommet>
      <Box direction="row" justify="center" margin={{ top: 'medium' }}>
        <Heading justify="center" size="small">Register</Heading>
      </Box>
      <Box fill align="center" alignContent="center" >
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value }) =>
            api.register({ userName: value.userName, email: value.email, password: value.password })
              .then(console.log({ userName: value.userName, email: value.email, password: value.password }))
              .then(() => login({ email: value.email, password: value.password }))
              .then(() => (window.location.href = './'))
              .catch(e => { console.log(e) })}
        >
          <FormField
            placeholder="User Name"
            name="userName"
            required
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length < 5) return 'Oops! User Must be at > 5 characters'
                return undefined
              }
            ]}
          />
          <FormField
            placeholder="Email"
            name="email"
            type="email"
            required
          />
          <Box
            width="flex"
            direction="row"
            margin="medium"
            align="center"
          >
            <FormField
              plain
              name="password"
              placeholder = "Password"
              type={reveal ? 'text' : 'password'}
              value={value}
              onChange={event => setValue(event.target.value)}
              required
            />
            <Button
              icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
              onClick={() => setReveal(!reveal)}
            />
          </Box>
          <Box direction="row" justify="center" gap="medium">
            <Button primary type="submit" label="Submit" color="#00739D" />
            <Button label="Cancel" type="reset" color="#00739D" />
          </Box>
        </Form>
        <Button className="member-button" href="/" label="Already a member? Click here!" plain="true" color="#00739D" margin="5%" />
      </Box>

    </Grommet>
  )
}

export default RegisterForm
