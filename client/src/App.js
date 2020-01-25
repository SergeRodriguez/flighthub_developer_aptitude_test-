import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";

function App() {
  return (
    <Router>
      <div className="nav-header">
        <Link to="/" className="nav-header-item">
          People
        </Link>
        <Link to="/planets" className="nav-header-item">
          Planets
        </Link>
        <Link to="/starships" className="nav-header-item">
          Starships
        </Link>
      </div>

      <Switch>
        <Route exact path="/">
          <People />
        </Route>

        <Route path="/planets">
          <Planets />
        </Route>

        <Route path="/starships">
          <Starships />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;