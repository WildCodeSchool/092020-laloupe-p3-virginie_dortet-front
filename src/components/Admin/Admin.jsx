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
  // const [token, setIstoken] = useState(localStorage.getItem(""));

  const history = useHistory();

  const handleSubmit = (email, password) => {
    if (!email || !password) {
      alert("Vous devez renseigner un mot de passe et un email");
    } else {
      axios
        .post(`${API_URL}/api/useradmin/login`, {
          Email: email,
          Password: password,
        })
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem("KALA_TOKEN", data.token);
          setIsLogin(true);
          // setIstoken(data.token);
          history.push("/admin/profil");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    }
  };

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
        // .then((res) => res.data)
        // .then(() => {
        //   setIsLogin(true);
        //   history.push("/admin/profil");
        // })
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
          <SignIn handleSubmit={handleSubmit} />
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
