import React, { useRef } from "react";
import { Grommet, Header, Button, Menu, Select } from 'grommet';
import { Home } from 'grommet-icons';

function Navbar(){
        return ( 
            <Grommet plain>
                <Header background="brand">
                <Button icon={<Home/>}  href="/" hoverIndicator/>
                <Select label= "Groups"
                options={["Group 1" , "Group 2"]}
                // value={value}
                // onChange={({ option }) => setValue(option)}
                />
                <Menu label="Menu" items={[{ label: 'Register', href: "/register"}, { label: 'Login/Logout', href: "/login" }]} />
                </Header>
          </Grommet>
        );
}

export default Navbar;