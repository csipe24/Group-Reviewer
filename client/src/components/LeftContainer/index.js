import React from "react";
import { Route, Switch} from "react-router-dom";
import { Box } from "grommet";
import Register from "../../pages/Register";
import NoMatch from "../../pages/NoMatch";
import { useAuthTokenStore } from "../../utils/auth";
import { useIsAuthenticated } from "../../utils/auth";
import Home from "../../pages/Home";


function LeftContainer(){
    useAuthTokenStore();
    const isAuth = useIsAuthenticated();

    return(
        <Box
            gridArea="leftSpace"
            background="#CCCCCC"
            round="small"
            margin={{"top":"medium"}}
        >
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
                        <Route exact path="/group/:id" component={Home} />
                    </div>
                )
                    :   <div />
                }
                <Route exact path="/register" component={Register} />
                <Route component={NoMatch} />
                </Switch>
            </Box >
        </Box>
    )
}

export default LeftContainer;