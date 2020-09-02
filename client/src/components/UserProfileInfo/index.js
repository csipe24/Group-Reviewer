import React, {useEffect, useState} from "react";
import { Grommet, Box, Anchor, Avatar} from 'grommet';
import api from "../../utils/api";

import { useStoreContext } from "../../store";
import { USER_INFO } from "../../utils/actions";
import {useAuthTokenStore} from "../../utils/auth";

function UserInfo(){
  const [userInfo, setUserInfo] = useState();

  const getUser = () =>{
    api.authenticated()
    .then(res => {
      setUserInfo(res.data.userName);
    })
      .catch(err => console.log(err));
    };

    getUser();

        return ( 
            <Grommet plain >
              <Box
              align="center"
              justify="center">
                <Avatar background="dark-2">CS</Avatar>
                <Anchor>{userInfo}</Anchor>
              </Box>
            </Grommet>
        );

        
}

export default UserInfo;