import React, { useState, useEffect } from "react";
import s from "./navbar.module.scss";
import cx from "classnames";

function Navbar(props) {
  const { setActivity } = props;
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h1>Garden Emporium</h1>
      </div>
      <div className={s.navbarContainer}>
        <div className={s.actionButtons}>
          <div
            className={cx(s.button, s.button1)}
            onClick={() => {
              setActivity("inventory");
            }}
          >
            Add Inventory
          </div>
          <div
            className={cx(s.button, s.button2)}
            onClick={() => {
              setActivity("challan");
            }}
          >
            Create Challan
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
