import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../../public/facebook1.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="container">
      <div className="mail">
        <Link to="/contact" className="mailcontact">
          <p>
            Me contacter par mail:
            <br />
            vivi.dortet@gmail.com
          </p>
        </Link>
      </div>
      <div className="facebook">
        <ul>
          <a
            href="https://www.facebook.com/Livres-pour-enfants-Ethiques-897089610447319"
            target=" blank "
          >
            <img className="reseausocial" src={Facebook} alt="facebook" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
