// useContext, useRef
import React, { useState, useEffect } from "react";
import Activites from "../Activities";
import Navbar from "../Navbar";
import s from "./landingPage.module.scss";
// import cx from "classnames";

function LandingPage() {
  const [activityName, setActivity] = useState("challan");
  const [isEditView, setIsEditView] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.navbarContainer}>
        <Navbar
          setActivity={setActivity}
          isEditView={isEditView}
          setIsEditView={setIsEditView}
        />
      </div>
      <div className={s.bodyContainer}>
        <Activites
          currentActiveTab={activityName}
          setActivity={setActivity}
          isEditView={isEditView}
          setIsEditView={setIsEditView}
        />
      </div>
    </div>
  );
}

export default LandingPage;
