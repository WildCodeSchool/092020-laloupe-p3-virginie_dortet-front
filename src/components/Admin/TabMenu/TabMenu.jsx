import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./TabMenu.scss";

const SideBarData = [
  {
    id: 1,
    title: "Mon Profil",
    path: "/admin/profil",
    cName: "nav-text",
  },
  {
    id: 2,
    title: "Mes Livres",
    path: "/admin/meslivres",
    cName: "nav-text",
  },
  {
    id: 3,
    title: "Mes actualités",
    path: "/admin/mesactus",
    cName: "nav-text",
  },
  {
    id: 4,
    title: "Mes ateliers",
    path: "/admin/mesateliers",
    cName: "nav-text",
  },
  {
    id: 5,
    title: "Mes partenaires",
    path: "/admin/mespartenaires",
    cName: "nav-text",
  },
];

function TabMenu({ setIsLogin }) {
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem("KALA_TOKEN");
    history.push("/admin/profil");
    setIsLogin(false);
  };

  return (
    <>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          {SideBarData.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <NavLink
                  activeStyle={{ background: "white", color: "#01504D" }}
                  to={item.path}
                >
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
          <li>
            <button type="submit" onClick={handleClick}>
              Déconnexion
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

TabMenu.propTypes = {
  setIsLogin: PropTypes.bool,
};

TabMenu.defaultProps = {
  setIsLogin: false,
};

export default TabMenu;
