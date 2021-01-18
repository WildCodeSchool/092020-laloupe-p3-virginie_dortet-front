import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Book.scss";
import logoulule from "../../../public/picturesBook/logoulule.png";

const API_URL = process.env.REACT_APP_API_URL;

function BookItem(props) {
  const [book] = useState(props);
  console.log(book.Images);

  return (
    <div className="bg-books">
      <div className="books-content">
        <h2>{book.Title}</h2>
        <div>
          {book.Images.map((image) => (
            <img
              src={`${API_URL}/public/images/${image.Image_Name}`}
              alt={image.Alt}
            />
          ))}
        </div>

        <p>{book.Description}</p>
        <a href={book.Link}>
          <img src={logoulule} alt="logo ulule" />
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
