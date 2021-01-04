import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Admin/SignIn/SignIn";
import Profile from "./components/Admin/Profile/Profile";
import MyBooks from "./components/Admin/MyBooks/MyBooks";
import MyNews from "./components/Admin/MyNews/MyNews";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin" component={SignIn} />
          <Route exact path="/admin/profil" component={Profile} />
          <Route path="/meslivres" component={MyBooks} />
          <Route path="/mesactus" component={MyNews} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
