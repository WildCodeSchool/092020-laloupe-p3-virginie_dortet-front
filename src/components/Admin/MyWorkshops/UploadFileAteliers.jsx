import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MyWorkshops.scss";

const API_URL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem("KALA_TOKEN");

function UploadFileAteliers({ setIsOpen }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [alt, setAlt] = useState("");

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
        .post(`${API_URL}/api/upload/ateliers`, data)
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
    if (!alt || !filename) {
      alert("Vous devez renseigner une image et une description.");
    } else {
      axios
        .post(
          `${API_URL}/api/images`,
          {
            Image_Name: filename,
            Alt: alt,
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
        {/* Insert an image and an alt */}
        <div className="atelier-container">
          <label htmlFor="image">
            Insérer une image
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={onChangeHandle}
            />
          </label>
          {/* <img src={`${API_URL}/public/images/${filename}`} alt="test" /> */}

          <label htmlFor="alt">
            Description de l'image
            <input
              type="text"
              name="alt"
              onChange={(e) => setAlt(e.target.value)}
            />
          </label>

          <button className="dl-btn" type="button" onClick={onClickHandle}>
            Téléchargez
          </button>
        </div>
        {/* Submit news  */}
        <div className="submit-atelier">
          <button type="submit" value="submit">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

UploadFileAteliers.propTypes = {
  setIsOpen: PropTypes.func,
};

UploadFileAteliers.defaultProps = {
  setIsOpen: false,
};

export default UploadFileAteliers;
