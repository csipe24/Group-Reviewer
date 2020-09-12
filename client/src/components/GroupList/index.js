import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../store/index";
import api from "../../utils/api";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { GET_GROUP, REMOVE_GROUP, LOADING } from "../../store/actions";

// eslint-disable-next-line no-unused-vars
import { Grommet, CardHeader, Box, Card, CardBody, CardFooter, Button, Heading, Stack} from 'grommet'
import { Close } from 'grommet-icons'

function GroupList () {
  const [state, dispatch] = useStoreContext()
  console.log(state)
  
  const getGroups = () => {
    dispatch({ type: LOADING })
    api.getGroups()
      .then(results => {
        // console.log(results.data)
          dispatch({
            type: GET_GROUP,
            groups: results.data
          })
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroups();
  }, []);

    const removeGroup = (id) => {
      api.removeGroup(id).then( () => {
        dispatch({
          type: REMOVE_GROUP,
          _id: id,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grommet plain>
      <Box >
        {state.groups.length ? (
          <Box >
            {state.groups.slice(0).reverse().map(group => (
              <Card key={group._id} width="medium" background="light-1" margin="medium" >
                <Stack anchor="right">

                <CardHeader  pad="small">
               
                <Heading margin="small" align="center" color="Black" level="3">{group.groupName}
                </Heading>
              
                </CardHeader>

                {(state.user._id = group.owner)? ( 
                // <Box alignSelf="end"  gap="xsmall" round="full" overflow="hidden" background="red" margin="small">
                <Button color="red" margin="small" icon={<Close/>} hoverIndicator={{color:"red", light:"red"}} onClick={() => removeGroup(group._id)} />
        
                ):("")}

        
              
                </Stack>

                <CardBody alignContents="center" pad={{ horizontal: 'medium' }} background="light-2">

                <Box alignContent="center" direction="column">

                <Link alignContent="center" to={"/group/" + group._id} > 
                <Heading level="4" color="#FFAA15">Go to Posts</Heading>
                </Link>

                <Link  > 
                <Heading level="4" color="#FFAA15">Manage Users</Heading>
                </Link>
              

                </Box>

              
                </CardBody>
              </Card>
            ))}
          </Box>
        ) : (
          <Heading>No Posts</Heading>
        )}
      </Box>
    </Grommet>
  );
}

export default GroupList;
