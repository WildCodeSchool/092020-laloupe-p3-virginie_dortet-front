import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
