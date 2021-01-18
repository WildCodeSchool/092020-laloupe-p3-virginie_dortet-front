import React from "react";
import UploadFileBooks from "./UploadFileBooks";
import "./MyBooks.scss";

function MyBooks() {
  return (
    <div>
      <div className="common-margin">
        <h1>Mes Livres</h1>
        <UploadFileBooks />
      </div>
    </div>
  );
}

export default MyBooks;
