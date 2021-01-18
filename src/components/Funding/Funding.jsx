import React, { useState, useEffect } from "react";
import axios from "axios";
import Arbuste from "../Arbuste/Arbuste";
import "./Funding.scss";

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
      <div>
        {funding.map((partner) => (
          <div key={partner.id}>
            <h2>{partner.Name}</h2>
            <p>{partner.Description}</p>
            <a href={partner.Link}>
              {/* <img src={`${API_URL}/public/images/${partner.Image_Name}`} alt="test" /> */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funding;
