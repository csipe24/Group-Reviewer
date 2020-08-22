import React from "react";
import {useAuthTokenStore} from "./utils/auth";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {

  useAuthTokenStore();
 
  return (
   
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    </div>
   
  );
}

export default App;
