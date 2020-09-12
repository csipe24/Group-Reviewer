import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../store/index";
import api from "../../utils/api";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { GET_GROUP, REMOVE_GROUP, LOADING } from "../../store/actions";

// eslint-disable-next-line no-unused-vars
import {
  Grommet,
  CardHeader,
  Box,
  Card,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Meter,
} from "grommet";

function GroupList() {
  const [state, dispatch] = useStoreContext();

  const getGroups = () => {
    dispatch({ type: LOADING });
    api
      .getGroups()
      .then((results) => {
        console.log(results.data);
        dispatch({
          type: GET_GROUP,
          groups: results.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroups();
  }, []);

  const removeGroup = (id) => {
    console.log(id);
    api
      .removeGroup(id)
      .then(() => {
        dispatch({
          type: REMOVE_GROUP,
          _id: id,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grommet plain>
      <Box>
        {state.groups.length ? (
          <Box>
            {state.groups
              .slice(0)
              .reverse()
              .map((group) => (
                <Card
                  key={group._id}
                  width="medium"
                  background="light-1"
                  margin="medium"
                >
                  <CardHeader pad="small">
                    Group Name:{group.groupName}
                  </CardHeader>

                  <CardFooter
                    pad={{ horizontal: "medium" }}
                    background="light-2"
                  >
                    <Link to={"/group/" + group._id}>
                      <strong>Go to Posts</strong>
                    </Link>
                    <Button
                      primary
                      label="Delete"
                      onClick={() => removeGroup(group._id)}
                      color="#00739D"
                    />
                    {/* <Button label="Update"
                    onClick={() => { setEditPostID(post._id) }}/>
                  {post._id === editPostID && (
                    <UpdateModal post={post} closeModal={closeModal}/>
                  )} */}
                  </CardFooter>
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
