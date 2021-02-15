import React, { useState } from "react";
import "./ContactForm.scss";
import emailjs from "emailjs-com";
import Arbuste from "../Arbuste/Arbuste";
import Popup from "../Popup/Popup";

const ContactForm = () => {
  const [mail, setMail] = useState(null);
  const [name, setName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [message, setMessage] = useState(null);
  const [popupState, setPopupState] = useState(false);
  const [checkRGPD, setCheckRGPD] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value.replace(/\n/g, "%0A"));
  };

  const openPopup = () => {
    setPopupState(!popupState);
  };

  const closePopup = () => {
    setPopupState(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mail || !name || !firstname || !message || !checkRGPD) {
      alert("Merci de remplir tous les champs");
    } else {
      emailjs.sendForm(
        "service_2voxb5n",
        "template_aj5s5o8",
        e.target,
        "user_4q5Gk2uw92taCLpWwiYEr"
      );
      alert("Votre Message a été envoyé avec succès !!");
      e.target.reset();
    }
  };

  return (
    <div className="sectionContact">
      <Arbuste />
      <h1 className="titrePage">Restons en Contact</h1>
      <div className="introContact">
        <p className="paragrapheContact">Auteure : Virginie Dortet</p>
        <p className="paragrapheContact">vivi.dortet@gmail.com</p>
        <br />
        <p className="paragrapheContact">
          Si vous avez une question ou voulez me contacter, sentez-vous libre de
          m'envoyer un message.
        </p>
      </div>
      <div className="containerForm">
        <form className="Form" onSubmit={handleSubmit}>
          <input
            className="inputName"
            type="text"
            name="name"
            placeholder="Votre Nom"
            onChange={handleName}
          />

          <input
            className="inputFirstName"
            type="text"
            name="firstname"
            placeholder="Votre Prénom"
            onChange={handleFirstName}
          />

          <input
            className="inputEmail"
            type="email"
            name="email"
            placeholder="Votre Email"
            onChange={handleMail}
          />

          <textarea
            className="inputMessage"
            type="text"
            name="message"
            placeholder="Votre Message"
            onChange={handleMessage}
          />
          <div>
            <br />
            <div className="rgpd-field">
              <label htmlFor="checkRGPD">
                <input
                  type="checkbox"
                  onChange={(e) => setCheckRGPD(e.target.value)}
                  name="checkRGPD"
                  id="checkRGPD"
                  required
                />
                J'accepte les conditions du{" "}
                <button
                  type="button"
                  className="underline-contact"
                  onClick={openPopup}
                  target="_blank"
                >
                  RGPD
                </button>
              </label>
            </div>
            <button className="envoyer" type="submit">
              Envoyer
            </button>
          </div>
          {popupState && <Popup closePopup={closePopup} />}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
