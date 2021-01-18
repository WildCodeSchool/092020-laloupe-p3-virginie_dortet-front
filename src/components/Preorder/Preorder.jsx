import React, { useState, useEffect } from "react";
import "./Preorder.scss";
import axios from "axios";
import Arbuste from "../Arbuste/Arbuste";

const API_URL = process.env.REACT_APP_API_URL;

const Preorder = () => {
  const [livres, setLivres] = useState([]);
  const [clientEmail, setClientEmail] = useState("");
  const [name, setName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [adress, setAdress] = useState(null);
  const [cp, setCp] = useState(null);
  const [ville, setVille] = useState(null);
  const [message, setMessage] = useState("");

  // const mailTo = "mailto:" + mail + "?subject=" + name + firstname + "&body=" + message;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMail = (e) => {
    setClientEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAdress = (e) => {
    setAdress(e.target.value);
  };

  const handleCp = (e) => {
    setCp(e.target.value);
  };

  const handleVille = (e) => {
    setVille(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const isCheck = (id) => {
    console.log(livres);
    const temp = livres;
    temp[id].active = !temp[id].active;
    setLivres(temp);
  };

  const handleQuantity = (id, e) => {
    console.log(livres);
    const temp = livres;
    temp[id].number = e.target.value;
    setLivres(temp);
  };

  const onClickHandle = () => {
    if (
      !clientEmail ||
      !name ||
      !firstname ||
      !phone ||
      !adress ||
      !cp ||
      !ville
    ) {
      alert("Merci de remplir tous les champs");
    } else {
      const livresbuyyed = livres.filter((el) => el.active === true);
      // console.log(livresbuyyed);
      const livresquantified = livresbuyyed.filter((el2) => el2.number > 0);
      console.log(livresquantified);

      axios
        .post(`${API_URL}/api/envoiemail`, {
          name,
          firstname,
          email: clientEmail,
          adresse: adress,
          phone,
          code_postal: cp,
          ville,
          message,
          livreschoisis: livresquantified,
        })
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err);
        });

      alert("La Pré-commande a été envoyée avec succès!");
    }
  };

  useEffect(() => {
    fetch(`${API_URL}/api/fundings`)
      .then((res) => res.json())
      .then((data2) => {
        setLivres(data2);
      });
  }, []);

  console.log(livres);
  return (
    <div className="sectionPreorder" id="preorder">
      <Arbuste />
      <h1 className="titrePagePreorder">Pré-commande</h1>
      <div className="introPreorder">
        <p className="paragraphePreorder">
          Si vous souhaitez commander un ou plusieurs livres,{" "}
        </p>
        <p className="paragraphePreorder">
          veuillez remplir le formulaire de précommande.
        </p>
        <p className="paragraphePreorder">
          Je vous donnerai mon adresse pour que vous m'envoyiez votre règlement.
        </p>
        <p className="paragraphePreorder">
          Pour le moment, j'accepte et j'encourage le paiement par chèque à
          envoyer à mon adresse postale.
        </p>
        <p className="paragraphePreorder">
          Pour tout autre moyen de paiement, merci de me le signaler.
        </p>
        <p className="paragraphePreorder">Je vous remercie, à bientôt.</p>
      </div>
      <div className="containerFormPreorder">
        <form className="FormPreorder">
          <label htmlFor="name">
            Nom
            <input
              className="inputNamePreorder"
              type="text"
              name="name"
              value={name}
              placeholder="Votre Nom"
              onChange={handleName}
            />
          </label>
          <label htmlFor="firstname">
            Prénom
            <input
              className="inputFirstNamePreorder"
              type="text"
              name="firstname"
              value={firstname}
              placeholder="Votre Prénom"
              onChange={handleFirstName}
            />
          </label>
          <label htmlFor="clientEmail">
            Email
            <input
              id="clientEmail"
              className="inputEmailPreorder"
              type="email"
              name="clientEmail"
              placeholder="Votre Email"
              value={clientEmail}
              onChange={handleMail}
            />
          </label>
          <label htmlFor="phone">
            Téléphone
            <input
              className="inputTelephonePreorder"
              type="tel"
              minLength="10"
              maxLength="10"
              name="phone"
              value={phone}
              placeholder="Votre Téléphone"
              onChange={handlePhone}
            />
          </label>
          <label htmlFor="adresse">
            Adresse
            <input
              className="inputAdressPreorder"
              type="text"
              name="adresse"
              value={adress}
              placeholder="Votre Adresse"
              onChange={handleAdress}
            />
          </label>
          <label htmlFor="codePostal">
            Code Postal
            <input
              className="inputCpPreorder"
              type="number"
              name="codePostal"
              value={cp}
              placeholder="Votre Code Postal"
              onChange={handleCp}
            />
          </label>
          <label htmlFor="ville">
            Ville
            <input
              className="inputAdressPreorder"
              type="text"
              name="ville"
              value={ville}
              placeholder="Votre Ville"
              onChange={handleVille}
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              className="inputMessagePreorder"
              type="text"
              name="message"
              value={message}
              rows="10"
              placeholder="Votre Message"
              onChange={handleMessage}
            />
          </label>

          <div className="sectionAPI">
            <h2 className="choix">Choix des Livres :</h2>
            <ul className="listeLivre">
              {livres.map((livre, id) => (
                <li className="titreLivre" key={livre.id}>
                  <div className="div1">
                    <input
                      className="checkbox-round"
                      id={livre.id}
                      name={livre.Name}
                      type="checkbox"
                      onClick={() => isCheck(id)}
                    />
                    {livre.Name}
                  </div>
                  <div className="div2">
                    <p className="quantityPreorder" name={livre.Name}>
                      quantité :
                    </p>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={livre.number}
                      onChange={(e) => handleQuantity(id, e)}
                      className="quantity"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="introPreorder">
            <p className="paragraphePreorder">
              M'indiquer également si vous souhaitez une dédicace et pour quel
              prénom.
            </p>
            <br />
            <button
              className="envoyerPreorder"
              type="button"
              onClick={onClickHandle}
            >
              Pré-Commander
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preorder;
