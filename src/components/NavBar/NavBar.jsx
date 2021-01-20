import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./NavBar.scss";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 720) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 720) && (
        <ul className="liste-nav">
          <li className="items-nav">
            <Link
              to="/"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Auteure
            </Link>
          </li>
          <li className="items-nav">
            <Link
              to="/livres"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Livres
            </Link>
          </li>
          <li className="items-nav">
            <Link
              to="/partenaires"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Partenaires
            </Link>
          </li>
          <li className="items-nav">
            <Link
              to="/actualites"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Actualités
            </Link>
          </li>
          <li className="items-nav">
            <Link
              to="/ateliers"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Ateliers
            </Link>
          </li>
          <li className="items-nav">
            <Link
              to="/precommande"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Précommande
            </Link>
          </li>
          <li className="items-nav">
            <Link
              to="/contact"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      <button type="button" onClick={toggleNavSmallScreen} className="btn-nav">
        <Hamburger />
      </button>
    </nav>
  );
}
