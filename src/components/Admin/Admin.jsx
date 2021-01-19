import React, { useState } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import TabMenu from "./TabMenu/TabMenu";
import SignIn from "./SignIn/SignIn";
import Profile from "./Profile/Profile";
import MyBooks from "./MyBooks/MyBooks";
import MyNews from "./MyNews/MyNews";
import MyFundings from "./MyFundings/MyFundings";
import MyWorkshops from "./MyWorkshops/MyWorkshops";

function Admin() {
  const { path } = useRouteMatch();
  const [isLogin, setIsLogin] = useState(false);

  // useeffect pour vérifier si le token est valide
  // route au niveau du back pour vérifier qu'il y a un token et s'il est bon
  // appel à cette route, isLogin reste à false, si c'est bon passe à false
  // redirection à /admin/profil
  // à la destruction du composant, destruction du token localStorage.removeItem
  // si ya le temps vérification que le token est bon

  return (
    <div>
      {isLogin && <TabMenu />}
      <Switch>
        <Route exact path={path}>
          <SignIn setIsLogin={setIsLogin} />
        </Route>

        {isLogin ? (
          <>
            <Route path={`${path}/profil`} component={Profile} />
            <Route path={`${path}/meslivres`} component={MyBooks} />
            <Route path={`${path}/mesactus`} component={MyNews} />
            <Route path={`${path}/mespartenaires`} component={MyFundings} />
            <Route path={`${path}/mesateliers`} component={MyWorkshops} />
          </>
        ) : (
          <Redirect to="/admin" />
        )}
      </Switch>
    </div>
  );
}

export default Admin;
