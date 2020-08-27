import React from "react";
// import { ListItem, List } from "../List";
// import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
import Post from "../Post";
import { Grommet } from 'grommet';
import { Home } from 'grommet-icons';

function PostsList() {
//   const [state, dispatch] = useStoreContext();

  return (
    <Grommet plain>
      <Post/>
      </Grommet>
  );
}

export default PostsList;