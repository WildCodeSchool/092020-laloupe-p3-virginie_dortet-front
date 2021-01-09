import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import TabMenu from "./TabMenu/TabMenu";
import SignIn from "./SignIn/SignIn";
import Profile from "./Profile/Profile";
import MyBooks from "./MyBooks/MyBooks";
import MyNews from "./MyNews/MyNews";

function Admin() {
  const { path } = useRouteMatch();

  return (
    <div>
      <TabMenu />
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
