import React from "react";
import UploadFile from "../../UploadFile";
import EmailTest from "../../EmailTest";
import "./MyBooks.scss";

function MyBooks() {
  return (
    <div>
      <div className="common-margin">
        <h1>Mes Livres</h1>
        <UploadFile />
        <EmailTest />
      </div>
    </div>
  );
}

export default MyBooks;
