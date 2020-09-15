import React from 'react'
import { Grommet, Box, Header, Button, Menu } from 'grommet'
import { Radial } from 'grommet-icons';
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
          <Button href="/help" alt="Help"><Help /></Button>
        )}
        <h1 className="logo"><Radial color="#00739D" /> myCircle</h1>
        <Box direction="row">
          {isAuth ? (
            <Menu align="right" label="Menu" items={[
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
