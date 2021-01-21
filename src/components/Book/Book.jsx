import React, { useState, useEffect } from "react";
import axios from "axios";
import Arbuste from "../Arbuste/Arbuste";
import BookItem from "./BookItem";
import "./Book.scss";

const API_URL = process.env.REACT_APP_API_URL;

function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/livres`)
      .then((res) => res.data)
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  }, []);

  return (
    <div className="bg-books">
      <Arbuste />
      <h1>Livres</h1>

      <div>
        {books.map((book) => (
          <div key={book.BookId}>
            <BookItem
              Title={book.Title}
              Description={book.Description}
              Price={book.Price}
              Publication={book.Publication}
              Link={book.Link}
              Images={book.Images}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
