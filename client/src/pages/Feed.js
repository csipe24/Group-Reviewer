import React from 'react';
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";
import { Grommet, Box } from 'grommet';

function Feed(){
    return(
        <Grommet>
            <Box fill align ="center" justify="center">
            <PostForm/>
        
            <PostsList/>
            </Box>
     </Grommet>
    )
}

export default Feed;