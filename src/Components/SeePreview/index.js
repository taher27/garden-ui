import React, { useRef } from "react";
import s from "./seePreview.module.scss";
import * as _ from "lodash";
import cx from "classnames";
import ReactToPrint from "react-to-print";
import axios from "axios";

import { addChallanData, editChallanData } from "../../utils/apiConfig.js";

function SeePreview(props) {
  const {
    orderContent,
    challanDetails,
    setActivity,
    isEditView,
    setIsEditView,
  } = props;
  const d = new Date();

  const componentToPrint = useRef();

  console.log("challanDetails: ", challanDetails);
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
            <div className={s.series}>{`${type}`}</div>
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

  const updateChallanData = async () => {
    console.log("challanDetails: ", challanDetails);
    // editChallanData
    const challanUpdated = await axios.put(`${editChallanData}`, {
      update_challan: {
        _id: challanDetails.challanID,
        challan_no: challanDetails.challanNo,
        customer_name: challanDetails.customerName,
        factory_name: challanDetails.factoryName.key,
        cloth_material: challanDetails.clothMaterial,
        cloth_meter: challanDetails.clothMeter,
        order_for: orderContent,
        date: challanDetails.date,
      },
    });
    console.log("challanUpdated: ", challanUpdated);

    setIsEditView(false);
    setActivity("list_challan");
  };

  const createChallanData = async () => {
    // addChallanData
    const challanCreated = await axios.post(`${addChallanData}`, {
      new_challan: {
        challan_no: challanDetails.challanNo,
        customer_name: challanDetails.customerName,
        factory_name: challanDetails.factoryName.key,
        cloth_material: challanDetails.clothMaterial,
        cloth_meter: challanDetails.clothMeter,
        order_for: orderContent,
        date: challanDetails.date,
      },
    });
    console.log("challanCreated: ", challanCreated);
    setIsEditView(false);
    setActivity("list_challan");
  };

  return (
    <>
      <div className={s.actionButtons}>
        <div
          className={cx(s.button, s.button1)}
          onClick={() => {
            setActivity("challan");
          }}
        >
          Back To Challan View
        </div>

        <ReactToPrint
          trigger={() => <div className={cx(s.button, s.button1)}>Print</div>}
          content={() => componentToPrint.current}
        />

        <div
          className={cx(s.button, s.button1)}
          onClick={() => {
            isEditView ? updateChallanData() : createChallanData();
          }}
        >
          {isEditView ? `Update` : `Create`}
        </div>
      </div>
      <div className={s.container} ref={componentToPrint}>
        <div className={s.header}>
          <h1>Challan</h1>
        </div>

        <div className={s.article}>
          <h1>Recipient</h1>
          <div className={s.address}>
            <p>{_.get(challanDetails, "customerName", "Customer Name")}</p>
          </div>
          <table className={s.meta}>
            <tr>
              <th>
                <span>Challan #</span>
              </th>
              <td>
                <span>{_.get(challanDetails, "challanNo", "GE_001")}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Date</span>
              </th>
              <td>
                <span>
                  {_.get(
                    challanDetails,
                    "date",
                    `${d.getDate()} / ${
                      parseInt(d.getMonth()) + 1
                    } / ${d.getFullYear()}`
                  )}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Cloth Material</span>
              </th>
              <td>
                <span>
                  {_.get(challanDetails, "clothMaterial", `White linen`)}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Cloth Meter</span>
              </th>
              <td>
                <span>{_.get(challanDetails, "clothMeter", `10000`)}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Factory</span>
              </th>
              <td>
                <span>
                  {_.get(challanDetails, "factoryName.key", `Kantharia`)}
                </span>
              </td>
            </tr>
          </table>
        </div>

        <div className={s.order}>
          {!_.isEmpty(orderContent.kids) &&
            DisplayOrder(orderContent.kids, "Kids")}
          {!_.isEmpty(orderContent.boys) &&
            DisplayOrder(orderContent.boys, "Boys")}
          {!_.isEmpty(orderContent.men) &&
            DisplayOrderForMen(orderContent.men, "Men")}
        </div>
      </div>
    </>
  );
}

export default SeePreview;
