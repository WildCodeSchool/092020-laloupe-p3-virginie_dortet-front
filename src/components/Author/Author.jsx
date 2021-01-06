import React from "react";
import "./Author.scss";
import Arbuste from "../Arbuste/Arbuste";
import photoVirginie from "../../../public/picturesAuthor/virginie_dortet.jpg";
import ptitsinge from "../../../public/picturesAuthor/singeSoloFDtransparent.png";

function Author() {
  return (
   <div className="page" id="author">
      <div className="sectionAuteur">
        <Arbuste />
        <h1 className="titrePage">L'auteur</h1>
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
              Auteur pour enfants je me lance dans l'auto-édition.{" "}
            </p>
            <p className="paragrapheAuteur">
              Passionnée par la littérature, j'ai voulu allier mes engagements
              environnementaux et ma passion de l'écriture.
            </p>
            <p className="paragrapheAuteur">
              Très impliquée dans la protection de l'environnement, je veux
              écrire des histoires pour les enfants et les sensibiliser.
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
      </div>

    </div>
  );
}


export default Author;
