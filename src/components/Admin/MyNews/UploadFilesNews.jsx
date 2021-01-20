import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MyNews.scss";

const API_URL = process.env.REACT_APP_API_URL;

function UploadFilesNews({ setIsOpen }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [title, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [alt, setAlt] = useState("");

  const onChangeHandle = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };
  const onClickHandle = () => {
    console.log("file send");
    if (
      selectedFile.type !== "image/jpeg" &&
      selectedFile.type !== "image/jpg" &&
      selectedFile.type !== "image/png"
    ) {
      alert("Seuls les formats .jpg, .png et .jpeg sont autorisés.");
    } else {
      const data = new FormData();
      data.append("file", selectedFile);
      console.table("form", data.get("file"));
      axios
        .post(`${API_URL}/api/upload/news`, data)
        .then((res) => res.data)
        .then((res) => {
          setFileName(res.filename);
          alert(`Image ${res.filename} téléchargé avec succès.`);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description || !date || !address || !filename) {
      alert(
        "Vous devez renseigner au minimum un titre, une description, une date et une adresse."
      );
    } else {
      axios
        .post(`${API_URL}/api/news`, {
          Title: title,
          Description: description,
          Date: date,
          Address: address,
          Image_Name: filename,
          Alt: alt,
        })
        .then((res) => res.data)
        .then(() => {
          setIsOpen(false);
        })
        .catch((err) => {
          console.log();
          alert(err.response.data.errorMessage);
        });
    }
  };

  return (
    <div className="actualites">
      <form onSubmit={handleSubmit}>
        <div className="ateliers">
          <div className="actus">
            <label htmlFor="title">
              Titre de l'actualité
              <input
                type="text"
                name="title"
                onChange={(e) => setTitre(e.target.value)}
              />
            </label>
            <label htmlFor="date">
              Date de l'actualité
              <input
                type="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label htmlFor="adresse">
              Adresse de l'actualité
              <input
                type="text"
                name="adresse"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label className="desc" htmlFor="description">
              Description de l'actualité
              <textarea
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                maxLength="800"
              />
            </label>
            <label htmlFor="titre">
              Alt de l'actualité
              <input
                type="text"
                name="alt"
                onChange={(e) => setAlt(e.target.value)}
              />
            </label>
            <label htmlFor="image">
              Insérer une image
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={onChangeHandle}
              />
            </label>
            <button className="btn" type="button" onClick={onClickHandle}>
              Téléchargez
            </button>
            <img
              className="visualize-img"
              src={`${API_URL}/public/images/${filename}`}
              alt=""
            />
          </div>
        </div>
        <div className="submit-news">
          <button type="submit" value="submit">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

UploadFilesNews.propTypes = {
  setIsOpen: PropTypes.bool,
};

UploadFilesNews.defaultProps = {
  setIsOpen: false,
};

export default UploadFilesNews;
