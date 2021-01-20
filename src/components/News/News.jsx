import React, { useState, useEffect } from "react";
import axios from "axios";
import Arbuste from "../Arbuste/Arbuste";
import Equipe from "../../../public/equipe.jpg";
import "./News.scss";

const API_URL = process.env.REACT_APP_API_URL;

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/news`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setNews(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="news">
      <Arbuste />
      <h1>Actualités</h1>

      <div className="new">
        {news.map((ne) => (
          <div key={ne.id} className="css">
            <img
              className="img"
              src={`${API_URL}/public/images/${ne.Image_Name}`}
              alt={ne.Alt}
            />
            <div className="paragraphe">
              <h2 className="police">{ne.Title}</h2>
              <p>
                {ne.Date.substring(0, 10)},{ne.Address}
              </p>
              <p>{ne.Description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="remerciements">
        <p>
          Remerciements à toute l'équipe de la Wild Code School, Topal Mustafa,
          Quero Sarah, Torres Philippe et Gouguet Maud.
        </p>
        <img className="equipe" src={Equipe} alt="equipe" />
      </div>
    </div>
  );
}

export default News;
