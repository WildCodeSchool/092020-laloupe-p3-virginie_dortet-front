import React from "react";
import PropTypes from "prop-types";
import "./Popup.scss";

const Popup = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <button type="button" onClick={closePopup}>
          X
        </button>
        <div className="RGPD">
          <p>
            Les informations recueillies sur ce formulaire sont enregistrées
            dans un fichier informatisé par la propriétaire du site, Virginie
            Dortet dans le but de traiter votre demande.
            <br /> La base légale du traitement est l'envoi des informations
            remplies dans ce formulaire dans un courrier électronique qui seront
            adressées au propriétaire du site dans le but d'établir un contact
            et de répondre à votre demande. Les données collectées seront
            communiquées aux seuls destinataires suivants : Virginie Dortet, la
            propriétaire du site.
            <br />
            Les données sont conservées pendant trois ans.
            <br />
            Vous pouvez accéder aux données vous concernant, les rectifier,
            demander leur effacement ou exercer votre droit à la limitation du
            traitement de vos données. Vous pouvez retirer à tout moment votre
            consentement au traitement de vos données en envoyant un mail à
            vivi.dortet@gmail.com.
            <br />
            Consultez le site cnil.fr pour plus d’informations sur vos droits.
            Pour exercer ces droits ou pour toute question sur le traitement de
            vos données dans ce dispositif, vous pouvez contacter par mail:
            vivi.dortet@gmail.com. Si vous estimez, après nous avoir contactés,
            que vos droits « Informatique et Libertés » ne sont pas respectés,
            vous pouvez adresser une réclamation à la CNIL.
          </p>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  closePopup: PropTypes.func,
};

Popup.defaultProps = {
  closePopup: false,
};

export default Popup;
