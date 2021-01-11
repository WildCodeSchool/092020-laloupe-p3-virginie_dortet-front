import React from "react";
import UploadFile from "../../UploadFile";
import TabMenu from "../TabMenu/TabMenu";
import EmailTest from "../../EmailTest";
import "./MyBooks.scss";

function MyBooks() {
  return (
    <div>
      <TabMenu />
      <div className="common-margin">
        <h1>Mes Livres</h1>
        <UploadFile />
        <EmailTest />
      </div>
    </div>
  );
}

export default MyBooks;
