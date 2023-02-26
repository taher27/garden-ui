import React, { useState } from "react";
import editIcon from "../../assets/svgs/icon-edit.svg";
import deleteIcon from "../../assets/svgs/icon-delete.svg";
import s from "./activities.module.scss";
import * as _ from "lodash";
import cx from "classnames";
import InputType from "../InputType";
// import Button from "../Button";
import ShowTableData from "../ShowTableData";
import CreateOrder from "../CreateOrder";
import tableViewConfig from "../../utils/tableViewConfig";

function Activites(props) {
  const d = new Date();
  const { currentActiveTab } = props;
  const [challanNo, setChallanNo] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [factoryName, setFactoryName] = useState("");
  const [clothMaterial, setClothMaterial] = useState("");
  const [clothMeter, setClothMeter] = useState("");
  // const [order, setOrderData] = useState([]);
  const [orderContent, setOrderDetails] = useState({
    kids: [],
    boys: [],
    men: [],
  });
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [date] = useState(
    `${d.getDate()} / ${parseInt(d.getMonth()) + 1} / ${d.getFullYear()}`
  );

  const Inventory = () => {
    return <>Hello from Inventory</>;
  };

  const Challan = () => {
    return (
      <>
        <div className={s.indexDetails}>
          <div className={s.inputOption}>
            <InputType
              type={"text"}
              placeholder={"Enter Challan No."}
              value={challanNo}
              onChangeHandler={setChallanNo}
              label={"Challan No:"}
            />
          </div>
          <div className={cx(s.inputOption, s.inputOptionLong)}>
            <InputType
              type={"text"}
              placeholder={"Enter Customer Name"}
              value={customerName}
              onChangeHandler={setCustomerName}
              width={"80%"}
              label={"Customer Name:"}
            />
          </div>
          <div className={cx(s.inputOption)}>
            <InputType
              type={"text"}
              placeholder={"dd/mm/yyy"}
              value={date}
              onChangeHandler={() => {}}
              label={"Date:"}
            />
          </div>
        </div>
        <hr />

        <div className={s.indexDetails}>
          <div className={cx(s.inputOption, s.inputOptionLong)}>
            <InputType
              type={"text"}
              placeholder={"Enter Factory Name"}
              value={factoryName}
              onChangeHandler={setFactoryName}
              label={"Factory Name:"}
              width={"80%"}
            />
          </div>
          <div className={cx(s.inputOption)}>
            <InputType
              type={"text"}
              placeholder={"Cloth Material"}
              value={clothMaterial}
              onChangeHandler={setClothMaterial}
              label={"Cloth Material:"}
            />
          </div>
          <div className={cx(s.inputOption)}>
            <InputType
              type={"text"}
              placeholder={"Cloth Meter"}
              value={clothMeter}
              onChangeHandler={setClothMeter}
              label={"Cloth Meter:"}
            />
          </div>
        </div>

        <div className={s.actionButtons}>
          <div
            className={s.button}
            onClick={() => {
              setShowOrderModal(true);
            }}
          >
            Add Order
          </div>
        </div>

        <div className={s.order}>
          {!_.isEmpty(orderContent.kids) &&
            DisplayOrder(orderContent.kids, "Kids")}
          {!_.isEmpty(orderContent.boys) &&
            DisplayOrder(orderContent.boys, "Boys")}
          {!_.isEmpty(orderContent.men) &&
            DisplayOrder(orderContent.men, "Men")}
        </div>
      </>
    );
  };

  const DisplayOrder = (orderData, type) => {
    let updatedData = [];
    updatedData =
      Array.isArray(orderData) && orderData.filter((item) => item.pieces !== 0);

    return (
      <>
        <div className={s.table}>
          <div className={s.series}>{type}</div>
          {Array.isArray(updatedData) &&
            updatedData.length > 0 &&
            updatedData.map((ord, i) => (
              <>
                <div className={s.rows}>
                  <div className={s.set}>
                    <div className={s.numerator}>
                      <span className={s.number}>{ord.length}</span>
                      <span className={s.size}>{ord.size}</span>
                    </div>
                    <div className={s.denominator}>
                      <span className={s.number}>{ord.pieces}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </>
    );
  };

  const tableData = [
    {
      date: "26/02/2023",
      challan_no: "GE_001",
      customer: "Farukh bhai Palej",
      cloth: "White Linen",
      factory_name: "Navsari",
      action: [
        {
          src: editIcon,
          message: "",
          handler: () => {
            console.log("edit");
          },
        },
        {
          src: deleteIcon,
          message: "",
          handler: () => {
            console.log("delete");
          },
        },
      ],
    },
    {
      date: "26/02/2023",
      challan_no: "GE_001",
      customer: "Farukh bhai Palej",
      cloth: "White Linen",
      factory_name: "Navsari",
      action: [
        {
          src: editIcon,
          message: "",
          handler: () => {
            console.log("edit");
          },
        },
        {
          src: deleteIcon,
          message: "",
          handler: () => {
            console.log("delete");
          },
        },
      ],
    },
    {
      date: "26/02/2023",
      challan_no: "GE_001",
      customer: "Farukh bhai Palej",
      cloth: "White Linen",
      factory_name: "Navsari",
      action: [
        {
          src: editIcon,
          message: "",
          handler: () => {
            console.log("edit");
          },
        },
        {
          src: deleteIcon,
          message: "",
          handler: () => {
            console.log("delete");
          },
        },
      ],
    },
    {
      date: "26/02/2023",
      challan_no: "GE_001",
      customer: "Farukh bhai Palej",
      cloth: "White Linen",
      factory_name: "Navsari",
      action: [
        {
          src: editIcon,
          message: "",
          handler: () => {
            console.log("edit");
          },
        },
        {
          src: deleteIcon,
          message: "",
          handler: () => {
            console.log("delete");
          },
        },
      ],
    },
    {
      date: "26/02/2023",
      challan_no: "GE_001",
      customer: "Farukh bhai Palej",
      cloth: "White Linen",
      factory_name: "Navsari",
      action: [
        {
          src: editIcon,
          message: "",
          handler: () => {
            console.log("edit");
          },
        },
        {
          src: deleteIcon,
          message: "",
          handler: () => {
            console.log("delete");
          },
        },
      ],
    },
  ];

  return (
    <div className={s.container}>
      {currentActiveTab === "inventory" && Inventory()}
      {currentActiveTab === "challan" && Challan()}
      {currentActiveTab === "list_challan" && (
        <ShowTableData
          tableData={tableData}
          tableHeading={tableViewConfig.challanTableList}
          noOfRecords={10}
        />
      )}
      <CreateOrder
        showOrderModal={showOrderModal}
        setShowOrderModal={setShowOrderModal}
        orderContent={orderContent}
        setOrderDetails={setOrderDetails}
      />
    </div>
  );
}

export default Activites;
