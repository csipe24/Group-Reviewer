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
import {StoreProvider} from "./utils/GlobalState";
import GroupForm from "./components/GroupForm";

import {Grid, Box} from "grommet";

import { useIsAuthenticated } from "./utils/auth";

import PageGrid from "./components/PageGrid";
import ContentContainer from "./components/ContentContainer";

function App() {
  useAuthTokenStore();
  const isAuth = useIsAuthenticated();
  return (
    <div className="App">
      <Router>
        <StoreProvider>
      <Navbar/>
        <div>
          {/* <PageGrid> */} {/* PageGrid and ContentContainer elements not rendering correctly. Commented out until I can get them functioning properly. */}
          <Grid
          responsive="true"
            rows={['flex']}
            columns={['flex', 'flex', 'flex']}
            gap="small"
            alignSelf="center"
            justifyContent="stretch"
            areas={[
            { name: 'leftSpace', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [2, 0] },
            { name: 'rightSpace', start: [0, 0], end: [0, 0] }
          ]}
          >
          {/* <ContentContainer> */}
          <Box
            gridArea="main"
            background="#7BE490"
            direction="column"
            border={{ color: '#7BE490', size: 'large' }}
            pad="medium"
            alignSelf="center"
            margin="medium" 
            width={{min: "10%", max: "50%"}}
            >
            <Switch>
              {isAuth
              ?<Route exact path="/" component={Home}/>
              :<Route exact path="/" component={Login}/>
              }
              
              <Route exact path="/register" component={Register}/>
              <Route exact path="/feed" component={Feed}/>
              <Route exact path="/group" component={GroupForm}/>
              <Route component={NoMatch} />
            </Switch>
            </Box >
          {/* </ContentContainer> */}
          </Grid>
          {/* </PageGrid> */}
        </div>
      <PageFooter/>
      </StoreProvider>
      </Router>
    </div>
  );
}

export default App;