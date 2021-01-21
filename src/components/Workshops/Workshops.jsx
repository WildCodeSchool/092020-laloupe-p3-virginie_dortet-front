import React, { useEffect, useState } from "react";
import axios from "axios";
import Arbuste from "../Arbuste/Arbuste";
import "./Workshops.scss";

const API_URL = process.env.REACT_APP_API_URL;

function Workshops() {
  const [ateliers, setAteliers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/images?filter=Atelier`)
      .then((res) => res.data)
      .then((data) => {
        setAteliers(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  }, []);

  return (
    <div className="bg-ateliers">
      <Arbuste />
      <h1>Ateliers Créatifs</h1>
      <p>C'est cadeau : colorisez vous-même les dessins du livre! </p>
      <div className="ateliers-images">
        {ateliers.map((img) => (
          <div key={img.Id}>
            <img
              src={`${API_URL}/public/images/${img.Image_Name}`}
              alt="test"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workshops;
