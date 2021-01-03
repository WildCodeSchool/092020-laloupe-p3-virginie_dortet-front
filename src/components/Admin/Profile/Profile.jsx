import React from "react";
import TabMenu from "../TabMenu/TabMenu";
import "./Profile.scss";

function Profile() {
  return (
    <div>
      <TabMenu />
      <div className="common-margin">
        <h1>Mon Profil</h1>
      </div>
    </div>
  );
}

export default Profile;
