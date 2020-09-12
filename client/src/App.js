import React from "react";
import { useAuthTokenStore } from "./utils/auth";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import PageFooter from "./components/Footer";
import {Grid, Grommet} from "grommet";
import { useIsAuthenticated } from "./utils/auth";
import LeftContainer from "./components/LeftContainer";
import CenterContainer from "./components/CenterContainer";
import RightContainer from "./components/RightContainer";

import PageGrid from "./components/PageGrid";

function App() {
  useAuthTokenStore();
  const isAuth = useIsAuthenticated();

  return (
    <Grommet justifyContent="center" className="App">
      <Router>  
      <Navbar/>
        <div>
          {/* <PageGrid> */}
          <Grid
            responsive="true"
            columns={['auto', 'auto', 'medium', 'auto', 'auto']}
            rows={['flex']}
            gap="small"
            areas={[
              { name: 'leftSpace', start: [1, 0], end: [1, 0] },
              { name: 'main', start: [2, 0], end: [2, 0] },
              { name: 'rightSpace', start: [3, 0], end: [3, 0] }
            ]}
          >
            <LeftContainer/>
            <CenterContainer/>
            <RightContainer/>
          </Grid>
          {/* </PageGrid> */}
        </div>
      <PageFooter/>    
      </Router>
    </Grommet>
  );
}

export default App;