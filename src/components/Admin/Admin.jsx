import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Profile from "./Profile/Profile";
import MyBooks from "./MyBooks/MyBooks";
import MyNews from "./MyNews/MyNews";
import "./Admin.scss";

function Admin() {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path} component={SignIn} />
        <Route path={`${path}/profil`} component={Profile} />
        <Route path={`${path}/meslivres`} component={MyBooks} />
        <Route path={`${path}/mesactus`} component={MyNews} />
      </Switch>
    </div>
  );
}

export default Admin;
