import React from "react";
import UploadFilesFundings from "./UploadFilesFundings";
import "./MyFundings.scss";

function MyFundings() {
  return (
    <div>
      <div className="common-margin">
        <h1>Mes Partenaires</h1>
        <UploadFilesFundings />
      </div>
    </div>
  );
}

export default MyFundings;
