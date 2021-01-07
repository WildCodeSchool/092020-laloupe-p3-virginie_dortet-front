import React from "react";
import TabMenu from "../TabMenu/TabMenu";
import "./MyNews.scss";

function MyNews() {
  return (
    <div>
      <TabMenu />
      <div className="common-margin">
        <h1>Mes actualités</h1>
      </div>
    </div>
  );
}

export default MyNews;
