import React from "react";
import "./Author.scss";
import Arbuste from "../Arbuste/Arbuste";
import photoVirginie from "../../../public/picturesAuthor/virginie_dortet.jpg";
import ptitsinge from "../../../public/picturesAuthor/singeSoloFDtransparent.png";
import animaux from "../../../public/picturesAuthor/animaux.png";

function Author() {
  return (
    <div className="sectionAuteur">
      <Arbuste />
      <div className="flexybox">
        <div className="PhotoVirginie">
          <img
            className="photoVirginie"
            alt="Virginie Dortet"
            src={photoVirginie}
          />
        </div>
        <div className="presentationVirginie">
          <h1 className="titreAuteur">Virginie Dortet,</h1>
          <h1 className="titreAuteur2">Auteure de livres pour enfants </h1>
          <p className="paragrapheAuteur">
            Auteure pour enfants je me suis lancée dans l'auto-édition.{" "}
          </p>
          <p className="paragrapheAuteur">
            Passionnée par la littérature, j'ai voulu allier mes engagements
            environnementaux et ma passion de l'écriture.
          </p>
          <p className="paragrapheAuteur">
            Très impliquée dans la protection de l'environnement, je veux écrire
            des histoires pour les enfants et les sensibiliser.
          </p>
        </div>
      </div>

      <div className="videoPresentation">
        <img className="ptitsinge" alt="pitsinge" src={ptitsinge} />

        <iframe
          className="video"
          title="videoAuteur"
          src="https://www.youtube.com/embed/Wwd3cWj44bE"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="titrevideo">
        <p>Illustration du livre "Monsieur Loyal" en live.</p>
      </div>
      <div className="animaux">
        <img src={animaux} alt="" />
      </div>
    </div>
  );
}

export default Author;
