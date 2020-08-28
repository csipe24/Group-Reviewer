import React from "react";
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button} from "grommet";
// import { useTodoContext } from "../utils/GlobalState";
import { Favorite, ShareOption } from 'grommet-icons';

function Post() {
//   const [state, dispatch] = useTodoContext();

  

  return (
    <Grommet plain>
    <Box direction="row" justify="center" margin={{ top: 'medium' }}>
      <Card  height="small" width="small" background="light-1">
        <CardHeader pad="medium">Header</CardHeader>
        <CardBody pad="medium">Body</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
        <Button
        icon={<Favorite color="red" />}
        hoverIndicator
      />
      <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
      </Card>
    </Box>
    </Grommet>
  );
}

export default Post;
