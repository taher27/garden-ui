import React from "react";
import s from "./seePreview.module.scss";
import * as _ from "lodash";
function SeePreview(props) {
  const { orderContent, challanDetails } = props;
  const d = new Date();

  console.log("challanDetails: ", challanDetails);
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
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Challan</h1>
        {/* <div className={s.address}>
          <p>Garden Emporium</p>
          <p>shop no. Katopore Darwaja, Bharuch 392001</p>
          <p>(+91) 99259 68952</p>
        </div> */}
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
              <span>{_.get(challanDetails, "factoryName", `Kantharia`)}</span>
            </td>
          </tr>
        </table>
      </div>

      <div className={s.order}>
        {!_.isEmpty(orderContent.kids) &&
          DisplayOrder(orderContent.kids, "Kids")}
        {!_.isEmpty(orderContent.boys) &&
          DisplayOrder(orderContent.boys, "Boys")}
        {!_.isEmpty(orderContent.men) && DisplayOrder(orderContent.men, "Men")}
      </div>

      <div className={s.aside}>
        <h1>
          <span>Additional Notes</span>
        </h1>
        <div>
          <p>Garden Emporium, we make the best suiting.</p>
        </div>
      </div>
    </div>
  );
}

export default SeePreview;
