import axios from "axios";
import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function UploadFileAteliers() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState("");

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

  return (
    <div>
      <form>
        <div className="ateliers-box">
          <div>
            <label htmlFor="coloriage">
              Insérer un coloriage
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={onChangeHandle}
              />
            </label>
            <button type="button" onClick={onClickHandle}>
              Téléchargez
            </button>
          </div>
        </div>

        <img src={`${API_URL}/public/images/${filename}`} alt="test" />
      </form>
    </div>
  );
}

export default UploadFileAteliers;
