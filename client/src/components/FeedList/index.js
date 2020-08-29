import React from "react";
// import { ListItem, List } from "../List";
// import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
import Post from "../PostList";
import { Grommet, Heading, Box } from 'grommet';
// import { Home } from 'grommet-icons';

function FeedList() {
//   const [state, dispatch] = useStoreContext();

  return (
    <Grommet plain>
    <Box direction="row" justify="center" margin={{ top: 'medium' }}>
         <Heading>Feed</Heading>
         </Box>
      <Post/>
      </Grommet>
  );
}

export default FeedList;