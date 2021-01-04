import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    flash: "",
  };

  handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit = (event) => {
    fetch("/admin/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then(
        (res) => this.setState({ flash: res.flash }),
        (err) => this.setState({ flash: err.flash })
      );

    // afficher l'état du composant
    const myState = JSON.stringify(this.state, 1, 1);
    console.log(`A form was submitted: ${myState}`);
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="center-login">
        <h1>Administration Virginie Dortet</h1>
        <form className="login-fields" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Adresse email
            <input
              label="Adresse email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password">
            Mot de passe
            <input
              label="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <Link to="/admin/profil">
            <button type="submit" value="submit">
              Se connecter
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
