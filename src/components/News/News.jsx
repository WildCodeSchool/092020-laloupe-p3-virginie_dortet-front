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
      {console.log(`${API_URL}/api/news`)}
      <Arbuste />
      <h1>Actualités</h1>

      <div className="new">
        {news.map((ne) => (
          <div key={ne.id}>
            <h2>{ne.Title}</h2>
            <p>{ne.Description}</p>
            <p>{ne.Date.substring(0, 10)}</p>
            <p>{ne.Address}</p>
          </div>
        ))}
      </div>
      <div className="remerciements">
        <img className="equipe" src={Equipe} alt="equipe" />
        <p>
          Remerciements à toute l'équipe de la Wild Code School, Topal Mustafa,
          Quero Sarah, Torres Philippe et Gouguet Maud.
        </p>
      </div>
    </div>
  );
}

export default News;
