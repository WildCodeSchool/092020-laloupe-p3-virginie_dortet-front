import React from "react";
import UploadFileAteliers from "./UploadFileAteliers";
import "./MyWorkshops.scss";

function MyWorkshops() {
  return (
    <div>
      <div className="common-margin">
        <div className="ateliers-edit-box">
          <h1>Mes Ateliers créatifs</h1>
          <h2>Liste des images de la page Ateliers créatifs</h2>
          <UploadFileAteliers />
        </div>
      </div>
    </div>
  );
}

export default MyWorkshops;
