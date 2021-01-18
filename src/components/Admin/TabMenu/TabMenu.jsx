import React from "react";
import { NavLink } from "react-router-dom";
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
];

function TabMenu() {
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
            <button type="submit">Déconnexion</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TabMenu;
