import React, { useState, useEffect } from "react";
import "./Preorder.scss";
import emailjs from "emailjs-com";
import Arbuste from "../Arbuste/Arbuste";

const Preorder = () => {
  const [livres, setLivres] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [mail, setMail] = useState(null);
  const [name, setName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [phone, setPhone] = useState(null);  
  const [adress, setAdress] = useState(null);
  const [cp, setCp] = useState(null);
  const [ville, setVille] = useState(null);
  
  
  // const mailTo = "mailto:" + mail + "?subject=" + name + firstname + "&body=" + message;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
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

  const isCheck = (e) => {
    setIsChecked(!isChecked);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mail || !name || !firstname || !phone || !adress || !cp || !ville) {
      alert("Merci de remplir tous les champs");

    } else if (phone) {

      var pattern = new RegExp(/^[0-9\b]+$/);
      
          if (!pattern.test(phone)) {
        
              alert("Saisie Incorrecte pour le Téléphone.");

          } else if(phone.length != 10) {
            
            alert("Téléphone incomplet.");
          }

    
    } else if (cp) {

      var pattern = new RegExp(/^[0-9\b]+$/);
      
          if (!pattern.test(cp)) {
        
              alert("Saisie Incorrecte pour le Code Postal.");

          } else if(cp.length != 5) {
            
            alert("Problème sur le Code Postal.");
          }
    }
     else {
      emailjs
        .sendForm(
          "service_sj798oe",
          "template_e7oebvk",
          e.target,
          "user_3IV3CFwlcwoGhXLwgO2tv"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      alert("Votre Message a été envoyé avec succès !!");
      e.target.reset();
    }
  };



  useEffect(() => {
    
    fetch('http://localhost:5000/api/fundings')
      .then((res) => res.json())
      .then((data) => {
        
        setLivres(data);
      });

  }, []);



  return (
    <div className="sectionPreorder" id="preorder">
      <Arbuste />
      <h1 className="titrePagePreorder">Pré-commande</h1>
      <div className="introPreorder">        
        <p className="paragraphePreorder">Vous êtes intéressé par nos ouvrages ?!</p>
        <p className="paragraphePreorder">Passez commande !</p>
      </div>
      <div className="containerFormPreorder">
        <form className="FormPreorder" onSubmit={handleSubmit}>
          <label>Nom</label>
              <input
                className="inputNamePreorder"
                type="text"
                name="name"
                placeholder="Votre Nom"
                onChange={handleName}
              />
            
        
            <label>Prénom</label>
              <input
                className="inputFirstNamePreorder"
                type="text"
                name="firstname"
                placeholder="Votre Prénom"
                onChange={handleFirstName}
              />
            


            <label>Email</label>
              <input
                className="inputEmailPreorder"
                type="email"
                name="email"
                placeholder="Votre Email"
                onChange={handleMail}
              />
            

            <label>Téléphone</label>
              <input
                className="inputTelephonePreorder"
                type="tel"
                minlength="10"
                maxlength="10"
                name="phone"
                placeholder="Votre Téléphone"
                onChange={handlePhone}
              />
            

            <label>Adresse</label>
              <input
                className="inputAdressPreorder"
                type="text"
                name="adresse"
                placeholder="Votre Adresse"
                onChange={handleAdress}
              />
            
            <label>Code Postal</label>
              <input
                className="inputCpPreorder"
                type="number"
                name="codePostal"
                placeholder="Votre Code Postal"
                onChange={handleCp}
              />
            

            <label>Ville</label>
              <input
                className="inputAdressPreorder"
                type="text"
                name="ville"
                placeholder="Votre Ville"
                onChange={handleVille}
              />
            

          <div className="sectionAPI">

            <h2 className="choix">Choix des Livres :</h2>
            <ul className="listeLivre">
              {livres.map((livre) => (
              
                <li className="titreLivre" key={livre.id}><div className="div1"><input className="checkbox-round" onClick={isCheck} name={livre.Name} type="checkbox"/>{livre.Name}</div><div className="div2"><p className="quantityPreorder">quantité :</p><input type="number"  min="0" max="10"  className="quantity"/></div> </li>
              ))}
                
            </ul>

          </div>
          

        <div>
            <br />
            <button className="envoyerPreorder" type="submit">
              Pré-Commander
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preorder;

