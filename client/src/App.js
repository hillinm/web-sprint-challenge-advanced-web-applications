import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../src/components/PrivateRoute";
import BubblePage from "../src/components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";

function App() {

  return (
    <Router>
      <div className="App">
      <Switch>
          <PrivateRoute exact path="/bubbles" component={BubblePage} />
          <Redirect exact from="/bubbles/reload" to="/bubbles" />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
