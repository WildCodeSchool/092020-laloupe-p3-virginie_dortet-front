import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MyFundings.scss";

const API_URL = process.env.REACT_APP_API_URL;

function UploadFilesFundings({ setIsOpen }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [name, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [Alt, setAlt] = useState("");
  const [Link, setLink] = useState("");

  const onChangeHandle = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onClickHandle = () => {
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
        .post(`${API_URL}/api/upload/fundings`, data)
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
    if (!name || !description) {
      alert(
        "Vous devez renseigner au minimum un nom de partenaire, et une description."
      );
    } else {
      const token = localStorage.getItem("KALA_TOKEN");
      axios
        .post(
          `${API_URL}/api/fundings`,
          {
            Name: name,
            Description: description,
            Image_Name: filename,
            Alt,
            Link,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => res.data)
        .then(() => {
          setIsOpen(false);
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container_partenaires">
          <div className="leslabels">
            <label className="nomPart" htmlFor="name">
              Nom du Partenaire
              <input
                type="text"
                name="Partnername"
                onChange={(e) => setTitre(e.target.value)}
              />
            </label>
            <label className="descriptPart" htmlFor="description">
              Description du Partenaire
              <textarea
                type="text"
                name="description"
                cols="60"
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label className="LinkPart" htmlFor="Link">
              Lien du Partenaire
              <input
                className="inputPart"
                type="url"
                name="Link"
                onChange={(e) => setLink(e.target.value)}
              />
            </label>
            <label className="PictPart" htmlFor="image">
              Insérer une image
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={onChangeHandle}
              />
            </label>
            <label className="AltPart" htmlFor="Alt">
              Description de l'image
              <input
                type="text"
                name="alt"
                onChange={(e) => setAlt(e.target.value)}
              />
            </label>
            <button className="dl-btn" type="button" onClick={onClickHandle}>
              Téléchargez l'image
            </button>
            <img src={`${API_URL}/public/images/${filename}`} alt="" />
          </div>
        </div>
        <div className="submit-Partner">
          <button className="EnvoyerPartner" type="submit" value="submit">
            Ajouter le Partenaire
          </button>
        </div>
      </form>
    </div>
  );
}

UploadFilesFundings.propTypes = {
  setIsOpen: PropTypes.func,
};

UploadFilesFundings.defaultProps = {
  setIsOpen: false,
};

export default UploadFilesFundings;
