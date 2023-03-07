import React, { useState } from "react";
import s from "./navbar.module.scss";
import cx from "classnames";

function Navbar(props) {
  const { setActivity } = props;
  const [inventoryOption, showInventoryOption] = useState(false);
  const [challanOption, showChallanOption] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h1>Garden Emporium</h1>
      </div>
      <div className={s.navbarContainer}>
        <div className={cx(s.actionButtons)}>
          <div
            className={cx(s.button, s.button1, s.dropdownBtn1)}
            onClick={() => {
              showInventoryOption(!inventoryOption);
              challanOption && showChallanOption(!challanOption);
            }}
          >
            Inventory
          </div>
          <div
            className={cx(s.dropdownContent, {
              [s.dropdownContent1]: inventoryOption,
            })}
          >
            <div
              className={cx(s.button, s.button1)}
              onClick={() => {
                setActivity("inventory");
                showInventoryOption(!inventoryOption);
              }}
            >
              Add Inventory
            </div>
            <div
              className={cx(s.button, s.button1)}
              onClick={() => {
                setActivity("list_inventory");
                showInventoryOption(!inventoryOption);
              }}
            >
              List Inventory
            </div>
          </div>

          <div
            className={cx(s.button, s.button2, s.dropdownBtn2)}
            onClick={() => {
              showChallanOption(!challanOption);
              inventoryOption && showInventoryOption(!inventoryOption);
            }}
          >
            Challan
          </div>
          <div
            className={cx(s.dropdownContent, {
              [s.dropdownContent2]: challanOption,
            })}
          >
            <div
              className={cx(s.button, s.button2)}
              onClick={() => {
                setActivity("challan");
                showChallanOption(!challanOption);
              }}
            >
              Create Challan
            </div>
            <div
              className={cx(s.button, s.button2)}
              onClick={() => {
                setActivity("list_challan");
                showChallanOption(!challanOption);
              }}
            >
              List Challans
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
