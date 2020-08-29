import React from "react";
import { Grommet, Header, Button, Menu, Select } from "grommet";
import { Home } from "grommet-icons";

function Navbar() {
  return (
    <Grommet plain>
      <Header background="light-4" pad="small" gap="medium">
        <Button icon={<Home />} href="/" hoverIndicator />
        <Select
          label="Groups"
          options={["Group 1", "Group 2"]}
          // value={value}
          // onChange={({ option }) => setValue(option)}
        />
        <Menu
          label="Menu"
          items={[
            { label: "Register", href: "/register" },
            { label: "Logout", href: "" },
            { label: "Post", href: "/feed" },
          ]}
        />
      </Header>
    </Grommet>
  );
}

export default Navbar;
