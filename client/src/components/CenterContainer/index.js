import React from "react";
import { Redirect, Route, Switch} from "react-router-dom";
import { Box } from "grommet";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import Feed from "../../pages/Feed";
import Login from "../../pages/Login";
import NoMatch from "../../pages/NoMatch";
import GroupPosts from "../../pages/Groupposts";
import { useAuthTokenStore } from "../../utils/auth";
import { useIsAuthenticated } from "../../utils/auth";

function CenterContainer(){
    useAuthTokenStore();
    const isAuth = useIsAuthenticated();

    return(
        <Box
            gridArea="main"
            background="#CCCCCC"
            round="small"
            margin={{"top":"medium"}}
        >
            <Switch>
              {isAuth
              ?(
                <div>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/feed" component={Feed} /> */}
                    <Route exact path="/group/:id" component={GroupPosts} />
                   
                </div>
              )
                : (   
                  <div>
                <Route exact path="/group/" component={Login}/>
                <Route exact path="/" component={Login} />
                </div>
                )
              }
              <Route exact path="/register" component={Register} />
              <Route component={NoMatch} />
            </Switch>
        </Box >
    )
}

export default CenterContainer;