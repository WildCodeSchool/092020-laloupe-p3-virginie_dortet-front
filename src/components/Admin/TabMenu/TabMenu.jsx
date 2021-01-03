import React from "react";
import { Link } from "react-router-dom";
import "./TabMenu.scss";

const SideBarData = [
  {
    id: 1,
    title: "Mon Profil",
    path: "/profil",
    cName: "nav-text",
  },
  {
    id: 2,
    title: "Mes Livres",
    path: "/meslivres",
    cName: "nav-text",
  },
  {
    id: 3,
    title: "Mes actualités",
    path: "/mesactus",
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
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default TabMenu;
