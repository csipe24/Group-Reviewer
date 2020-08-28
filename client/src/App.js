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

import {Grid, Box} from "grommet";

import PageGrid from "./components/PageGrid";
import ContentContainer from "./components/ContentContainer";

function App() {
  useAuthTokenStore();
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <div>
          {/* <PageGrid> */} {/* PageGrid and ContentContainer elements not rendering correctly. Commented out until I can get them functioning properly. */}
          <Grid
            rows={['medium', 'medium']}
            columns={['xlarge', 'large']}
            gap="small"
            areas={[
            { name: 'main', start: [0, 0], end: [0, 0] },
          ]}
          >
          {/* <ContentContainer> */}
          <Box
            gridArea="main"
            background="brand"
            direction="column"
            border={{ color: 'brand', size: 'large' }}
            pad="medium"
            align="center"
            margin="medium" 
            width={{min: "10%", max: "50%"}}
            >
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/feed" component={Feed}/>
              <Route component={NoMatch} />
            </Switch>
            </Box >
          {/* </ContentContainer> */}
          </Grid>
          {/* </PageGrid> */}
        </div>
      <PageFooter/>
      </Router>
    </div>
  );
}

export default App;
