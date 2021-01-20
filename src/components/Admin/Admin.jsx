import React, { useState, useEffect } from "react";
import {
  useHistory,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import axios from "axios";
import TabMenu from "./TabMenu/TabMenu";
import SignIn from "./SignIn/SignIn";
import Profile from "./Profile/Profile";
import MyBooks from "./MyBooks/MyBooks";
import MyNews from "./MyNews/MyNews";
import MyFundings from "./MyFundings/MyFundings";
import MyWorkshops from "./MyWorkshops/MyWorkshops";

const API_URL = process.env.REACT_APP_API_URL;

function Admin() {
  const { path } = useRouteMatch();
  const [isLogin, setIsLogin] = useState(false);

  // useeffect pour vérifier si le token est valide
  // route au niveau du back pour vérifier qu'il y a un token et s'il est bon
  // appel à cette route, isLogin reste à false, si c'est bon passe à false
  // redirection à /admin/profil
  // à la destruction du composant, destruction du token localStorage.removeItem
  // si ya le temps vérification que le token est bon
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("KALA_TOKEN");
    if (!token) {
      setIsLogin(false);
    } else {
      axios
        .get(`${API_URL}/api/useradmin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
        .then(() => {
          setIsLogin(true);
          history.push("/admin/profil");
        })
        .catch((err) => {
          setIsLogin(false);
          alert(err.response.data.errorMessage);
        });
    }
  }, [history]);

  return (
    <div>
      {isLogin && <TabMenu setIsLogin={setIsLogin} />}
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
