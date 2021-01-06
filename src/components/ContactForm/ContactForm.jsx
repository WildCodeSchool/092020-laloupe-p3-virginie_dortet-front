// import React, { Component } from 'react';
import React, { useState } from "react";
import "./ContactForm.scss";
import Arbuste from "../Arbuste/Arbuste";
import emailjs from 'emailjs-com';


const ContactForm = () => {
    const [mail, setMail] = useState(null);
    const [name, setName] = useState(null);
    const [firstname, setFirstName] = useState(null);
    const [message, setMessage] = useState(null);
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
  
    const handleMessage = (e) => {
      setMessage(e.target.value.replace(/\n/g, "%0A"));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if (!mail || !name || !firstname || !message) {
        alert('Merci de remplir tous les champs');

      } else {

        emailjs.sendForm('service_sj798oe', 'template_rnp641f', e.target, 'user_3IV3CFwlcwoGhXLwgO2tv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Votre Message a été envoyé avec succès !!");
      e.target.reset()

      }      
    };
  
    return (
        <div className="sectionContact">
        <Arbuste />
        <h1 className="titrePage">Restons en Contact</h1>
        <div className="introContact">
              <p className="paragrapheContact">Auteure : Virginie Dortet</p>
              <p className="paragrapheContact">vivi.dortet@gmail.com</p>
              <br></br>
              <p className="paragrapheContact">Si vous avez une question ou
                      voulez me contacter, sentez-vous libre de m'envoyer un message.
              </p>
        </div>
                <div className="containerForm">
                
                    <form className="Form" onSubmit={handleSubmit}>

                      
                            <input className="inputName" type="text" name="name" placeholder="Votre Nom"  onChange={handleName} />
                        
                            
                            <input className="inputFirstName" type="text" name="firstname" placeholder="Votre Prénom"  onChange={handleFirstName} />
                        
                        
                            <input className="inputEmail" type="email" name="email" placeholder="Votre Email" onChange={handleMail} />
                        

                        <textarea className="inputMessage"
                            type="text"
                            name="message"
                            placeholder="Votre Message" 
                            onChange={handleMessage}
                        />
                        <div>
                            <br />
                            <button className="envoyer" type="submit">Envoyer</button>
                        </div>
                    </form>
                
                </div>
      </div>
    );
  };
  

export default ContactForm;
