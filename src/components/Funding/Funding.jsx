import React, { useState, useEffect } from "react";
import axios from "axios";
import Arbuste from "../Arbuste/Arbuste";
import "./Funding.scss";
import Monkey from "./PictureFunding/3singesFDtransparent.png";

const API_URL = process.env.REACT_APP_API_URL;

function Funding() {
  const [funding, setFunding] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/fundings`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setFunding(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  }, []);

  return (
    <div className="bg-funding">
      <Arbuste />

      <h1>Partenaires</h1>

      <img className="monkey" src={Monkey} alt="singe" />
      <div>
        {funding.map((partner) => (
          <div key={partner.id}>
            <h2 className="titles">{partner.Name}</h2>

            <p className="description_partner">{partner.Description}</p>
            <div className="container_image">
              <a target="_blank" rel="noreferrer" href={partner.Link}>
                <img
                  className="inject_picture"
                  src={`${API_URL}/public/images/${partner.Image_Name}`}
                  alt={partner.Alt}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funding;
