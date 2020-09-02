import React from "react";
import { Grommet, Box, Header, Button, Menu, Select } from 'grommet';
import { Home } from 'grommet-icons';
import {useIsAuthenticated, useLogout} from "../../utils/auth"
import UserProfileInfo from "../UserProfileInfo";

function Navbar(){
  const logout = useLogout();
  const isAuth = useIsAuthenticated();
        return ( 
            <Grommet plain>
                <Header background="light-4" pad="small" gap="medium">
                
                <UserProfileInfo/>
                {/* <Select label= "Groups"
                options={["Group 1" , "Group 2"]}
                // value={value}
                // onChange={({ option }) => setValue(option)}
                /> */}
                <Box direction="row">
                {isAuth ? (
                <Menu align="right" label="Menu" items={[ 
                  {label: "Post", href:"/feed" },
                  {label:'Logout', onClick: ()=>{logout()}}
                ]}
                />
                ) : (
                <Menu align="right" label="Menu" items={[ 
                  {label:"Register", href:"/register" },
                  {label:'Login', href:"/login"}
                  ]}
                />)}
               

                <Button icon={<Home/>}  href="/" hoverIndicator/>
                </Box>
                </Header>
          </Grommet>
        );
}

export default Navbar;