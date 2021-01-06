import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import TabMenu from "../TabMenu/TabMenu";
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
    return () => {
      localStorage.removeItem("KALA_TOKEN");
    };
  }, [history]);

  return (
    <div>
      <TabMenu />
      <div className="common-margin">
        <h1>Mon Profil</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.Email} - {user.Password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
