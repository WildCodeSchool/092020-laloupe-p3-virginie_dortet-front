import React from "react";
import TabMenu from "../TabMenu/TabMenu";
import "./MyBooks.scss";

function MyBooks() {
  return (
    <div>
      <TabMenu />
      <div className="common-margin">
        <h1>Mes Livres</h1>
      </div>
    </div>
  );
}

export default MyBooks;
