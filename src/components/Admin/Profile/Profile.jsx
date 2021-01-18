import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Profile.scss";

const API_URL = process.env.REACT_APP_API_URL;

function Profile() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("KALA_TOKEN");
    if (!token) {
      history.push("/admin");
    } else {
      axios
        .get(`${API_URL}/api/useradmin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    }
  }, [history]);

  return (
    <div>
      <div className="common-margin">
        <h1>Mon Profil</h1>
        <ul className="list-admin">
          {users.map((user) => (
            <li key={user.id}>
              <h2>Mon Email</h2>
              <p>{user.Email}</p>
              <h2>Mon mot de passe</h2>
              <p>{user.Password}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
