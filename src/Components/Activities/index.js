import React, { useState, useEffect } from "react";
import editIcon from "../../assets/svgs/icon-edit.svg";
import deleteIcon from "../../assets/svgs/icon-delete.svg";
import printIcon from "../../assets/svgs/file.svg";
// import printIcon2 from "../../assets/svgs/folder.svg";
import axios from "axios";

import s from "./activities.module.scss";
import * as _ from "lodash";
import cx from "classnames";
import InputType from "../InputType";
import CreateOrder from "../CreateOrder";
import tableViewConfig from "../../utils/tableViewConfig";
import SeePreview from "../SeePreview";
import { getAllChallanData, deleteChallanData } from "../../utils/apiConfig.js";
import Table from "../Table";
import DropDown from "../DropDown";

function Activities(props) {
  const d = new Date();
  const { currentActiveTab, setActivity, isEditView, setIsEditView } = props;

  const [challanID, setChallanID] = useState("");
  const [challanNo, setChallanNo] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [colorName, setColorName] = useState("");
  // const [colorName, setColorName] = useState({
  //   title: "White",
  //   key: "White",
  // });
  const [factoryName, setFactoryName] = useState({
    title: "Kantharia",
    key: "Kantharia",
  });

  const [clothMaterial, setClothMaterial] = useState("");
  const [design, setDesign] = useState("");
  const [clothMeter, setClothMeter] = useState(0);
  const [orderContent, setOrderDetails] = useState({
    kids: [],
    boys: [],
    men: [],
  });
  const [date, setDate] = useState(
    `${d.getDate()} / ${parseInt(d.getMonth()) + 1} / ${d.getFullYear()}`
  );

  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [allChallanData, setAllChallanData] = useState([]);

  let challanDataArray = [];

  useEffect(() => {
    if (currentActiveTab === "list_challan") fetchChallanData();
    if (currentActiveTab === "challan") {
      if (!isEditView) {
        setChallanNo("");
        setCustomerName("");
        setFactoryName({
          title: "Kantharia",
          key: "Kantharia",
        });
        setClothMaterial("");
        setDesign("");
        setClothMeter("");
        setOrderDetails({
          kids: [],
          boys: [],
          men: [],
        });
        setDate(
          `${d.getDate()} / ${parseInt(d.getMonth()) + 1} / ${d.getFullYear()}`
        );
      }
    }
  }, [currentActiveTab]);

  useEffect(() => {
    _.isArray(allChallanData) && allChallanData.map((item) => {});
  }, [allChallanData]);

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
          <div className={cx(s.inputOption)}>
            <div className={s.heading}>
              <label>{"Factory Name:"}</label>
            </div>
            <DropDown
              data={[
                { title: "Kantharia", key: "Kantharia" },
                { title: "Navsari", key: "Navsari" },
                { title: "Bazar", key: "Bazar" },
                { title: "Surat", key: "Surat" },
              ]}
              currentSet={factoryName}
              setCurrentSet={(value) => {
                setFactoryName(value);
              }}
              dropDownContanierStyles={{
                width: "200px",
                height: "30px",
                fontSize: "16px",
              }}
            />
          </div>

          <div className={cx(s.inputOption)}>
            <InputType
              type={"text"}
              placeholder={"Cloth Color"}
              value={colorName}
              onChangeHandler={setColorName}
              label={"Cloth Color:"}
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
              placeholder={"Style/Design"}
              value={design}
              onChangeHandler={setDesign}
              label={"Style/Design:"}
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
              setActivity("showPreview");
            }}
          >
            See Preview
          </div>
          <div
            className={s.button}
            onClick={() => {
              setShowOrderModal(!showOrderModal);
            }}
          >
            Add Order Details
          </div>
        </div>

        <div className={s.order}>
          {!_.isEmpty(orderContent.kids) &&
            DisplayOrder(orderContent.kids, "Kids")}
          {!_.isEmpty(orderContent.boys) &&
            DisplayOrder(orderContent.boys, "Boys")}
          {!_.isEmpty(orderContent.men) &&
            DisplayOrderForMen(orderContent.men, "Men")}
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
          {Array.isArray(updatedData) && updatedData.length > 0 && (
            <div className={s.series}>{type}</div>
          )}
          <div className={s.orderblock}>
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
        </div>
      </>
    );
  };

  const DisplayOrderForMen = (orderData, type) => {
    return (
      <>
        <div className={s.table}>
          {Array.isArray(orderData) && orderData.length > 0 && (
            <div className={s.series}>{type}</div>
          )}

          <div className={s.orderblock}>
            {Array.isArray(orderData) &&
              orderData.length > 0 &&
              orderData.map((ord, i) => (
                <>
                  {orderData[0][i] !== 0 && dataSet("52", i, orderData[0][i])}
                  {orderData[0][i] !== 0 && dataSet("54", i, orderData[1][i])}
                  {orderData[0][i] !== 0 && dataSet("56", i, orderData[2][i])}
                  {orderData[0][i] !== 0 && dataSet("58", i, orderData[3][i])}
                  {orderData[0][i] !== 0 && dataSet("60", i, orderData[4][i])}
                  {orderData[0][i] !== 0 && dataSet("62", i, orderData[5][i])}
                </>
              ))}
          </div>
        </div>
      </>
    );
  };

  const dataSet = (length, i, pieces) => {
    return (
      <div className={s.rows}>
        <div className={s.set}>
          <div className={s.numerator}>
            <span className={s.number}>{length}</span>
            <span className={s.size}>
              {i === 0
                ? "S"
                : i === 1
                ? "M"
                : i === 2
                ? "L"
                : i === 3
                ? "XL"
                : i === 4
                ? "XXL"
                : i === 5 && "XXXL"}
            </span>
          </div>
          <div className={s.denominator}>
            <span className={s.number}>{pieces}</span>
          </div>
        </div>
      </div>
    );
  };

  const setCurrentChallanData = (challan) => {
    console.log("isEditView: ", isEditView);
    console.log("challan: ", challan);
    setIsEditView(true);

    setChallanNo(challan.challan_no);
    setCustomerName(challan.customer_name);
    setFactoryName({
      title: challan.factory_name,
      key: challan.factory_name,
    });
    setClothMaterial(challan.cloth_material);
    setDesign(challan.design);
    setClothMeter(challan.cloth_meter);
    setOrderDetails(challan.order_for);
    setDate(challan.date);
    setChallanID(challan._id);
    setColorName(challan.cloth_color);
  };

  const fetchChallanData = async () => {
    const challanData = await axios.get(`${getAllChallanData}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("challanData: ", challanData.data);
    setAllChallanData(challanData.data);
  };

  const deleteChallan = async () => {
    const challanDeleted = await axios.delete(`${deleteChallanData}`, {
      data: {
        _id: challanID,
      },
    });
    console.log(challanDeleted);
    fetchChallanData();
  };

  const deleteChallanModal = () => {
    return (
      <div className={cx(s.modal, s.deleteModal)}>
        <div className={s.text}>
          <span>Do you want to delete this challan ?</span>
        </div>
        <div className={s.actionButtons}>
          <div
            className={cx(s.button, s.buttonNoBgColor)}
            onClick={() => {
              setShowDeleteModal(false);
            }}
          >
            Cancel
          </div>
          <div
            className={s.button}
            onClick={() => {
              setShowDeleteModal(false);
              deleteChallan();
            }}
          >
            Delete
          </div>
        </div>
      </div>
    );
  };

  allChallanData.getAllChallans &&
    allChallanData.getAllChallans.forEach((challan, i) => {
      const {
        challan_no,
        cloth_material,
        cloth_meter,
        customer_name,
        date,
        factory_name,
        design,
        cloth_color,
      } = challan;
      let obj = {
        date,
        challan_no,
        customer_name,
        cloth_material,
        cloth_meter,
        factory_name,
        design,
        cloth_color,
        action: [
          {
            src: editIcon,
            message: "Edit",
            handler: () => {
              setActivity("challan");
              setCurrentChallanData(challan);
            },
          },
          {
            src: deleteIcon,
            message: "Delete",
            handler: () => {
              setShowDeleteModal(true);
              setChallanID(challan._id);
            },
          },
          {
            src: printIcon,
            message: "Print",
            handler: () => {
              setActivity("showPreview");
              setCurrentChallanData(challan);
            },
          },
        ],
      };
      challanDataArray.push(obj);
    });

  return (
    <div className={s.container}>
      <CreateOrder
        showOrderModal={showOrderModal}
        setShowOrderModal={setShowOrderModal}
        orderContent={orderContent}
        setOrderDetails={setOrderDetails}
        setClothMeter={setClothMeter}
        clothMeter={clothMeter}
      />

      {currentActiveTab === "inventory" && Inventory()}
      {currentActiveTab === "challan" && Challan()}
      {currentActiveTab === "list_challan" && (
        <Table
          data={challanDataArray}
          head={tableViewConfig.challanTableList}
          recordsPerPage={10}
        />
      )}
      {currentActiveTab === "showPreview" && (
        <SeePreview
          orderContent={orderContent}
          setActivity={setActivity}
          isEditView={isEditView}
          setIsEditView={setIsEditView}
          challanDetails={{
            challanID,
            challanNo,
            customerName,
            factoryName,
            clothMaterial,
            clothMeter,
            date,
            design,
            colorName,
          }}
        />
      )}
      {showDeleteModal && deleteChallanModal()}
    </div>
  );
}

export default Activities;
