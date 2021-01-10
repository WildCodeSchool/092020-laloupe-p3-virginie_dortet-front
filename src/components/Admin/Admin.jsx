import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import TabMenu from "./TabMenu/TabMenu";
import SignIn from "./SignIn/SignIn";
import Profile from "./Profile/Profile";
import MyBooks from "./MyBooks/MyBooks";
import MyNews from "./MyNews/MyNews";

const API_URL = process.env.REACT_APP_API_URL;

function Admin() {
  const { path } = useRouteMatch();
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/useradmin/login`)
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("KALA_TOKEN", data.token);
        setIsLogin(true);
      })
      .catch((err) => {
        console.log();
        alert(err.response.data.errorMessage);
      });
  }, [history]);

  return (
    <div>
      <TabMenu />
      <Switch>
        <Route exact path={path} component={SignIn} />
        {isLogin ? (
          <Route path={`${path}/profil`} component={Profile} />
        ) : (
          <Redirect to="/admin" />
        )}
        <Route path={`${path}/meslivres`} component={MyBooks} />
        <Route path={`${path}/mesactus`} component={MyNews} />
      </Switch>
    </div>
  );
}

export default Admin;
