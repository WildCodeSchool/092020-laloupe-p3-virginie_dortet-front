import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadFilesNews from "./UploadFilesNews";
import "./MyNews.scss";

const API_URL = process.env.REACT_APP_API_URL;

function MyNews() {
  const [news, setNews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openNew = () => {
    setIsOpen(!isOpen);
  };

  const displayNew = () => {
    axios
      .get(`${API_URL}/api/news`)
      .then((res) => res.data)
      .then((data) => {
        setNews(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  useEffect(() => {
    displayNew();
  }, [isOpen]);

  // Suppress Book
  const deleteNew = (id) => {
    axios
      .delete(`${API_URL}/api/news/${id}`)
      .then((res) => res.data)
      .then(() => {
        // appeler la fonction pour màj l'affichage
        displayNew();
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  return (
    <div>
      <div className="common-margin">
        <h1>Mes actualités</h1>

        <div className="table-news">
          <h2>Liste des actualités</h2>
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Date</th>
                <th>Adresse</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {news.map((ne) => (
                <tr key={ne.id}>
                  <td>{ne.Title}</td>
                  <td>{ne.Date}</td>
                  <td>{ne.Address}</td>
                  <td>
                    <button
                      className="supressnew-btn"
                      onClick={() => {
                        deleteNew(ne.id);
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

        <button className="add-new" type="button" onClick={openNew}>
          Ajouter une actualité
        </button>
        {isOpen && <UploadFilesNews setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default MyNews;
