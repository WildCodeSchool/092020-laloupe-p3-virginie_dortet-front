import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignIn.scss";

function SignIn({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitCredentials = (event) => {
    event.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <div className="center-login">
      <h1>Administration Virginie Dortet</h1>
      <form className="login-fields" onSubmit={submitCredentials}>
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
  handleSubmit: PropTypes.func.isRequired,
};

export default SignIn;
