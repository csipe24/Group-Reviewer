import React from "react";
import { Grommet, Header, Button, Menu } from "grommet";
import { Home } from "grommet-icons";
import { useLogout } from "../../utils/auth";

function Navbar() {
  const logout = useLogout();
  return (
    <Grommet plain>
      <Header background="light-4" pad="small" gap="medium">
        <Button icon={<Home />} href="/" hoverIndicator />
        <Menu
          label="Menu"
          items={[
            { label: "Register", href: "/register" },
            {
              label: "Logout",
              onClick: () => {
                logout();
              },
            },
            { label: "Post", href: "/feed" },
          ]}
        />
      </Header>
    </Grommet>
  );
}

export default Navbar;
