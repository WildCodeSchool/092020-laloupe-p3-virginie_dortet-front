import axios from "axios";
import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function EmailTest() {
  const [clientEmail, setClientEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  const onClickHandle = () => {
    if (!clientEmail || !clientName || !clientMessage) {
      alert("you must provide all the elements");
    } else {
      axios
        .post(`${API_URL}/api/emails/envoi`, {
          name: clientName,
          email: clientEmail,
          message: clientMessage,
        })
        .then((res) => res.data)
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <form>
      <label htmlFor="clientEmail">
        Your email:{" "}
        <input
          type="email"
          name="clientEmail"
          id="clientEmail"
          value={clientEmail}
          onChange={(event) => setClientEmail(event.target.value)}
        />
      </label>
      <label htmlFor="clientName">
        Your Name:{" "}
        <input
          type="name"
          name="clientName"
          id="clientName"
          value={clientName}
          onChange={(event) => setClientName(event.target.value)}
        />
      </label>
      <label htmlFor="clientMessage">
        Your Message:{" "}
        <textarea
          type="message"
          name="clientMessage"
          id="clientMessage"
          value={clientMessage}
          onChange={(event) => setClientMessage(event.target.value)}
        />
      </label>
      <button type="button" onClick={onClickHandle}>
        Envoyer
      </button>
    </form>
  );
}

export default EmailTest;
