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
        <Link to="/people" className="nav-header-button">
          People
        </Link>
        <Link to="/starships" className="nav-header-button">
          Starships
        </Link>
        <Link to="/planets" className="nav-header-button">
          Planets
        </Link>
      </div>

      <Switch>
        <Route exact path="/people">
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