import React, { useState, useEffect } from "react";
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
      if (window.innerWidth > 500) {
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
      {(toggleMenu || largeur > 500) && (
        <ul className="liste-nav">
          <li className="items-nav">
            <a
              href="#author"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Auteure
            </a>
          </li>
          <li className="items-nav">
            <a
              href="#book"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Livres
            </a>
          </li>
          <li className="items-nav">
            <a
              href="#funding"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Partenaires
            </a>
          </li>
          <li className="items-nav">
            <a
              href="#news"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Actualités
            </a>
          </li>
          <li className="items-nav">
            <a
              href="#workshops"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Ateliers
            </a>
          </li>
          <li className="items-nav">
            <a
              href="#preorder"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Précommande
            </a>
          </li>
          <li className="items-nav">
            <a
              href="#contact"
              onClick={toggleNavSmallScreen}
              style={{ textDecoration: "none", color: "#FFE7CB" }}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      <button type="button" onClick={toggleNavSmallScreen} className="btn-nav">
        <Hamburger />
      </button>
    </nav>
  );
}
