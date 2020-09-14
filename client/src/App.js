import React from "react";
import {Grommet} from "grommet";
import Navbar from "./components/Navbar";
import PageGrid from "./components/PageGrid";
import LeftContainer from "./components/LeftContainer";
import CenterContainer from "./components/CenterContainer";
import RightContainer from "./components/RightContainer";
import PageFooter from "./components/Footer";
import { BrowserRouter as Router} from "react-router-dom";
import Push from "./components/Push";

function App() {
  return (
    <Grommet justifyContent="center" className="App" full={true}>
      <Router>  
      <Navbar/>
        <div>
          <PageGrid>
            <LeftContainer/>
            <CenterContainer/>
            <RightContainer/>
          </PageGrid>
        </div>
        <Push/>
      <PageFooter/>    
      </Router>
    </Grommet>
  );
}

export default App;