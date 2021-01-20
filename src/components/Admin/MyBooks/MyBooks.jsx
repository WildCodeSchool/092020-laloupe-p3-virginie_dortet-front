import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadFileBooks from "./UploadFileBooks";
import "./MyBooks.scss";

const API_URL = process.env.REACT_APP_API_URL;

function MyBooks() {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openBook = () => {
    setIsOpen(!isOpen);
  };

  const displayBook = () => {
    axios
      .get(`${API_URL}/api/livres`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  useEffect(() => {
    displayBook();
  }, [isOpen]);

  // Suppress Book
  const deleteBook = (BookId) => {
    axios
      .delete(`${API_URL}/api/livres/${BookId}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        // appeler la fonction pour màj l'affichage
        displayBook();
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  return (
    <div>
      <div className="common-margin">
        <h1>Mes Livres</h1>
        <div className="table-books">
          <h2>Liste des livres</h2>
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Date de publication</th>
                <th>Lien financement</th>
                <th>Prix (en euros)</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.BookId}>
                  <td>{book.Title}</td>
                  <td>{book.Publication}</td>
                  <td>{book.Link}</td>
                  <td>{book.Price}</td>
                  <td>
                    <button
                      className="suppressbook-btn"
                      onClick={() => {
                        deleteBook(book.BookId);
                      }}
                      type="button"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type="button" className="addbook-btn" onClick={openBook}>
          Ajouter un livre
        </button>
        {isOpen && <UploadFileBooks setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default MyBooks;
