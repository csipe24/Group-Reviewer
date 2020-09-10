import React from 'react'
import { Grommet, Box, Header, Button, Menu } from 'grommet'
import { Home, Help } from 'grommet-icons'
import { useIsAuthenticated, useLogout } from '../../utils/auth'
import UserInfo from '../UserProfileInfoGlobal'

function Navbar () {
  const logout = useLogout()
  const isAuth = useIsAuthenticated()
  return (
    <Grommet plain>
      <Header background="#FFAA15" pad="small" gap="medium">
        {isAuth ? (
          <UserInfo />) : (
          <Button href="/help"><Help /></Button>
        )}
        {/* <Select label= "Groups"
                options={["Group 1" , "Group 2"]}
                // value={value}
                // onChange={({ option }) => setValue(option)}
                /> */}
        <h1>myCircle</h1>

        <Box direction="row">
          {isAuth ? (
            <Menu align="right" label="Menu" items={[
              { label: 'Post', href: '/feed' },
              { label: 'Logout', onClick: () => { logout() } }
            ]}
            />
          ) : (
            <div />)}

          <Button icon={<Home/>} href="/" hoverIndicator color="#00739D"/>
        </Box>
      </Header>
    </Grommet>
  )
}

export default Navbar
