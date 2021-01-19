import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "./SignIn.scss";

const API_URL = process.env.REACT_APP_API_URL;

function SignIn({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
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
          history.push("/admin/profil");
        })
        .catch((err) => {
          console.log();
          alert(err.response.data.errorMessage);
        });
    }
  };

  return (
    <div className="center-login">
      {console.log(`${API_URL}/api/news`)}

      <h1>Administration Virginie Dortet</h1>
      <form className="login-fields" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Adresse email
          <input
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label htmlFor="password">
          Mot de passe
          <input
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit" value="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  setIsLogin: PropTypes.bool,
};

SignIn.defaultProps = {
  setIsLogin: false,
};

export default SignIn;
