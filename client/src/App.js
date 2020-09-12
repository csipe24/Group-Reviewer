import React from "react";
import { useAuthTokenStore } from "./utils/auth";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import PageFooter from "./components/Footer";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import GroupForm from "./components/GroupForm";
import GroupList from "./components/GroupList";
import {Grid, Box, Grommet} from "grommet";
import { useIsAuthenticated } from "./utils/auth";

// import PageGrid from "./components/PageGrid";
// import ContentContainer from "./components/ContentContainer";
import GroupPosts from "./pages/Groupposts";

function App() {
  useAuthTokenStore();
  const isAuth = useIsAuthenticated();

  return (
    <Grommet justifyContent="center" className="App">
      <Router>  
      <Navbar/>
        <div>
          <Grid
          responsive="true"
            columns={['auto', 'medium', 'auto']}
            rows={['flex']}
            gap="small"
            areas={[
            { name: 'leftSpace', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
            { name: 'rightSpace', start: [2, 0], end: [2, 0] }
          ]}
          >
          <Box
            gridArea="leftSpace"
            background="#CCCCCC"
            round="small"
            margin={{"top":"medium"}}
          ></Box>
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
              <Route exact path="/" component={Home}/>
              <Route exact path="/feed" component={Feed}/>
              <Route exact path="/group" component={GroupForm}/>
              <Route exact path="/grouplist" component={GroupList}/>
              <Route exact path="/group/:id" component={GroupPosts}/>
              </div>
              )
              :<Route exact path="/" component={Login}/>
              }
              <Route exact path="/register" component={Register}/>
              <Route component={NoMatch} />
            </Switch>
            </Box >
          <Box
            gridArea="rightSpace"
            background="#CCCCCC"
            round="small"
            margin={{"top":"medium"}}
          ></Box>
          </Grid>
        </div>
      <PageFooter/>    
      </Router>
    </Grommet>
  );
}

export default App;