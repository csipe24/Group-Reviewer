import React, {useEffect} from "react";
import { Grommet, Box, Anchor, Avatar, Heading} from 'grommet';
import {Golang} from "grommet-icons";
import { useStoreContext } from "../../store/index";
import { USER_INFO, LOADING } from "../../store/actions";
import {useAuthTokenStore} from "../../utils/auth";
import api from "../../utils/api";

function UserInfo(){
 const [state, dispatch] = useStoreContext();

  const getUser = () =>{
    // dispatch({type: LOADING})
    api.authenticated()
    .then(res => {
        dispatch({
            type: USER_INFO,
            user: res.data});
    })
    // .then(console.log(state))
      .catch(err => console.log(err));
    };

    useEffect(()=> {
        getUser();
    }, []);
 
        return ( 
            <Grommet plain >
              <Box
              align="center"
              justify="center">
                <Avatar ><Golang/></Avatar>
                
                <Anchor>{state.user.userName}</Anchor>
               
              </Box>
            </Grommet>
        );

        
}

export default UserInfo;