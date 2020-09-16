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
                    ):  
                        <div className="welcome"  align="center">
                            <h1>Welcome to myCircle</h1>
                            <p>myCircle is a social site built to help you and your circle plan your gatherings!</p>
                            <p>Ever try to pick out a place to eat or a movie to see but no one can agree on where to go? With myCircle, you can propose an activity to your group and let your friends vote on whether they want to do that activity or not.</p>
                            <p>Create or join a group and start planning your next outing today!</p>
                        </div>
                    }
                    <Route exact path="/register" component={Register} />
                    <Route component={NoMatch} />
                </Switch>
            </Box >
        </Box>
    )
}

export default LeftContainer;