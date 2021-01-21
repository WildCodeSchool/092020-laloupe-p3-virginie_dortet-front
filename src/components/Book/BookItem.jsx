import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Book.scss";
import logoulule from "../../../public/picturesBook/logoulule.png";

const API_URL = process.env.REACT_APP_API_URL;

function BookItem(props) {
  const [book] = useState(props);

  return (
    <div className="bg-books">
      <div className="books-content">
        <h2>{book.Title}</h2>
        <div className="carousel-container">
          <Carousel>
            {book.Images.map((image) => (
              <div key={image.ImageId}>
                <img
                  src={`${API_URL}/public/images/${image.Image_Name}`}
                  alt={image.Alt}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <p>{book.Description}</p>
        <a href={book.Link} target="_blank" rel="noreferrer">
          <img className="logo-ulule" src={logoulule} alt="logo ulule" />
        </a>
        <p className="price-book"> Prix: {book.Price} euros</p>
        <Link to="/precommande">
          <button type="submit">Pré-commande</button>
        </Link>
      </div>
    </div>
  );
}

export default BookItem;
