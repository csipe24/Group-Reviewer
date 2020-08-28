import React from "react";
import { Grommet, Box, Form, FormField, Button, TextInput, Text} from 'grommet';
import { Hide, View } from 'grommet-icons';
import api from "../../utils/api";
import { useLogin } from "../../utils/auth";


function RegisterForm(){
    const [value, setValue] = React.useState('');
    const [reveal, setReveal] = React.useState(false);

    const login = useLogin();
  

        return ( 
            <Grommet plain>
            <Box direction="row" justify="center" margin={{ top: 'medium' }}>
            <Text size="xlarge">Register</Text>
            </Box>
            <Box fill align="center" alignContent="center" >
            <Form
            onReset={event => console.log(event)}
            onSubmit={( {value} ) =>
             api.register({userName: value.userName, email:value.email, password:value.password})
             .then(console.log({userName: value.userName, email:value.email, password:value.password}))
             .then(() => login({ email:value.email, password:value.password}))
             .then(() => (window.location.href = "./"))
             .catch(e=>{console.log(e)})
            }>
            <FormField
            placeholder="User Name"
            name="userName"
            required
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length < 5) return 'Oops! User Must be at > 5 characters';
                return undefined;
              }
            ]}
            />
            <FormField 
            // ref={emailInput} 
            placeholder="Email" 
            name="email" 
            type="email" 
            required />

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
        
            
            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" type="reset"/>
            <Button type="submit" label="Submit" />

            </Box>
            </Form>
            </Box>
        
          </Grommet>
        )
}


export default RegisterForm;