import React, { useState } from "react";
import deleteButton from "../../assets/svgs/icon-delete.svg";
import s from "./activities.module.scss";
import * as _ from "lodash";
import cx from "classnames";
import InputType from "../InputType";
import Button from "../Button";

function Activites(props) {
  const { currentActiveTab } = props;
  const [challanNo, setChallanNo] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  const [factoryName, setFactoryName] = useState("");
  const [order, setOrderData] = useState([]);
  const [orderContent, setOrderDetails] = useState([]);
  const [showAddOrderModal, setShowAddOrderModal] = useState(false);
  // const [size, setSize] = useState("M");
  // const [length, setLength] = useState();
  // const [pieces, setPieces] = useState();

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
          <div className={cx(s.inputOption, s.inputOptionDate)}>
            <InputType
              type={"date"}
              id={"orderDate"}
              dataName={"orderDate"}
              placeholder={"dd/mm/yyy"}
              value={date}
              onChangeHandler={setDate}
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
              width={"50%"}
            />
          </div>
        </div>

        <div className={s.actionButtons}>
          <div
            className={s.button}
            onClick={() => {
              setShowAddOrderModal(true);
            }}
          >
            Add Order
          </div>
        </div>

        <div className={s.order}>{ShowOrder()}</div>
      </>
    );
  };

  const ShowOrder = () => {
    return (
      <>
        <div className={s.table}>
          {Array.isArray(order) &&
            order.map((ord, i) => (
              <>
                <div className={s.rows}>
                  {/* <div className={s.series}> </div> */}
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

  const handleOrderChange = async (val, type, id) => {
    let tempOrderData = _.cloneDeep(order);
    if (type === "size") {
      tempOrderData[id].size = val;
    } else if (type === "length") {
      tempOrderData[id].length = val;
    } else if (type === "pieces") {
      tempOrderData[id].pieces = val;
    }
    setOrderData([...tempOrderData]);
  };

  const addOrder = () => {
    let tempOrderData = _.cloneDeep(order);

    tempOrderData.push({
      size: "M",
      length: 42,
      pieces: 1,
    });

    setOrderData([...tempOrderData]);
  };

  const deleteOrder = (id) => {
    order.splice(id, 1);
    setOrderData([...order]);
  };

  const orderDetails = () => {
    return (
      <div className={cx(s.modal)}>
        <div className={s.header}>
          Order Details
          <Button
            width={"100px"}
            styles={{ marginLeft: "auto" }}
            clickHandler={() => {
              addOrder();
            }}
          >
            Add Row
          </Button>
        </div>
        <div className={s.body}>
          {_.size(order) === 0 ? (
            <div className={s.emptyBody}>No Order Detials yet.</div>
          ) : (
            Array.isArray(order) &&
            order.map((ord, i) => (
              <div className={s.inputContent}>
                <InputType
                  type={"text"}
                  placeholder={`Select size ("XS", "S", "M", "L", "XL", "XXL", "XXXL")`}
                  value={ord.size.toUpperCase()}
                  onChangeHandler={(val) => {
                    handleOrderChange(val, "size", i);
                  }}
                  label={"Select size:"}
                  labelStyles={{ color: "white" }}
                />
                <InputType
                  type={"text"}
                  placeholder={"Length"}
                  value={ord.length}
                  onChangeHandler={(val) => {
                    handleOrderChange(val, "length", i);
                  }}
                  label={"Enter Length:"}
                  labelStyles={{ color: "white" }}
                />

                <InputType
                  type={"text"}
                  placeholder={"No. of pcs"}
                  value={ord.pieces}
                  onChangeHandler={(val) => {
                    handleOrderChange(val, "pieces", i);
                  }}
                  label={"Enter Pieces:"}
                  labelStyles={{ color: "white" }}
                />

                <img
                  className={s.appImg}
                  src={deleteButton}
                  alt="Delete Env"
                  onClick={() => {
                    deleteOrder(i);
                  }}
                />
              </div>
            ))
          )}
        </div>
        <div className={s.footer}>
          <Button
            width={"80px"}
            clickHandler={() => {
              setOrderData([...orderContent]);
              setShowAddOrderModal(false);
            }}
          >
            Cancel
          </Button>
          <Button
            width={"80px"}
            clickHandler={() => {
              setOrderDetails([...order]);
              setShowAddOrderModal(false);
            }}
          >
            Save
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={s.container}>
      {currentActiveTab === "inventory" && Inventory()}
      {currentActiveTab === "challan" && Challan()}
      {showAddOrderModal && orderDetails()}
    </div>
  );
}

export default Activites;
