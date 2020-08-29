import React from "react";
import { Box } from "grommet";

function ContentContainer() {
  return (
    <Box
      gridArea="content"
      direction="column"
      border={{ color: "brand", size: "large" }}
      pad="medium"
      align="center"
      margin="medium"
      width={{ min: "10%", max: "50%" }}
    />
  );
}

export default ContentContainer;
