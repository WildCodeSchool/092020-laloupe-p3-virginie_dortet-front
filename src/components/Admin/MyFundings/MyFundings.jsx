import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadFilesFundings from "./UploadFilesFundings";
import "./MyFundings.scss";

const API_URL = process.env.REACT_APP_API_URL;

function MyFundings() {
  const [fundings, setFundings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openFunding = () => {
    setIsOpen(!isOpen);
  };

  const displayFunding = () => {
    axios
      .get(`${API_URL}/api/fundings`)
      .then((res) => res.data)
      .then((data) => {
        setFundings(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  useEffect(() => {
    displayFunding();
  }, [isOpen]);

  // Suppress Book
  const deleteFunding = (id) => {
    axios
      .delete(`${API_URL}/api/fundings/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        // appeler la fonction pour màj l'affichage
        displayFunding();
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  return (
    <div>
      <div className="common-margin">
        <h1>Mes Partenaires</h1>

        <div className="table-funding">
          <h2>Liste des partenaires</h2>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Lien</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {fundings.map((funding) => (
                <tr key={funding.id}>
                  <td>{funding.Name}</td>
                  <td>{funding.Link}</td>
                  <td>
                    <button
                      className="supressfunding-btn"
                      onClick={() => {
                        deleteFunding(funding.id);
                      }}
                      type="button"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="add-funding" type="button" onClick={openFunding}>
          Ajouter un partenaire
        </button>
        {isOpen && <UploadFilesFundings setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default MyFundings;
