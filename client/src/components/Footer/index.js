import React from "react";
import { Footer, Button, Text, Grommet } from "grommet";
import { Github } from "grommet-icons";
import "./footer.css"

function PageFooter() {
  return (
    <Grommet>
      <Footer background="light-4" justify="center" pad="small">
        <Text textAlign="center" size="medium">
          <Button
            icon={<Github />}
            href="https://github.com/csipe24/Group-Reviewer"
          />
        </Text>
      </Footer>
    </Grommet>
  );
}

export default PageFooter;
