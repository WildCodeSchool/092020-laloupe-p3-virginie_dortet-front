import React, { useState } from "react";

import "./Book.scss";
import logoulule from "../../../public/picturesBook/logoulule.png";

function BookItem(props) {
  const [book] = useState(props);
  console.log(book, props);

  return (
    <div className="bg-books">
      <div className="books-content">
        <h2>{book.Title}</h2>
        <p>{book.Description}</p>
        <img src={logoulule} alt="logo ulule" />
        <p className="price-book"> Prix: {book.Price} euros</p>
        <button type="submit">Pré-commande</button>
      </div>
    </div>
  );
}

export default BookItem;
