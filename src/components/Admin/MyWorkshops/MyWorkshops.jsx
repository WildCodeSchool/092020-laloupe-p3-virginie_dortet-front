import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadFileAteliers from "./UploadFileAteliers";
import "./MyWorkshops.scss";

const API_URL = process.env.REACT_APP_API_URL;

function MyWorkshops() {
  const [ateliers, setAteliers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openAtelier = () => {
    setIsOpen(!isOpen);
  };

  const displayAtelier = () => {
    axios
      .get(`${API_URL}/api/images?filter=Atelier`)
      .then((res) => res.data)
      .then((data) => {
        setAteliers(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  useEffect(() => {
    displayAtelier();
  }, [isOpen]);

  // Suppress Book
  // const deleteAtelier = (id) => {
  //   axios
  //     .delete(`${API_URL}/api/images/${id}`)
  //     .then((res) => res.data)
  //     .then((data) => {
  //       console.log(data);
  //       // appeler la fonction pour màj l'affichage
  //       displayAtelier();
  //     })
  //     .catch((err) => {
  //       alert(err.response.data.errorMessage);
  //     });
  // };

  return (
    <div>
      <div className="common-margin">
        <div className="ateliers-edit-box">
          <h1>Mes Ateliers créatifs</h1>
          <h2>Liste des images des ateliers créatifs</h2>

          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                {/* <th>Supprimer</th> */}
              </tr>
            </thead>
            <tbody>
              {ateliers.map((atelier) => (
                <tr key={atelier.Id}>
                  <td>{atelier.Image_Name}</td>
                  <td>{atelier.Alt}</td>
                  {/* <td>
                    <button
                      className="supressatelier-btn" onClick={() => {
                        deleteAtelier(atelier.id);
                      }}
                      type="button"
                    >
                      Supprimer
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="add-atelier" type="button" onClick={openAtelier}>
          Ajouter une image
        </button>
        {isOpen && <UploadFileAteliers setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default MyWorkshops;
