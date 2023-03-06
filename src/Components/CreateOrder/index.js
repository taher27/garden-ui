import React, { useEffect, useState } from "react";
import deleteButton from "../../assets/svgs/icon-delete.svg";
import s from "./createOrder.module.scss";
import * as _ from "lodash";
import cx from "classnames";
import InputType from "../InputType";
import Button from "../Button";
import {
  boysOrderStructure,
  kidsOrderStructure,
  menOrderStructure,
} from "../../utils/constants";

function CreateOrder(props) {
  const { showOrderModal, setShowOrderModal, orderContent, setOrderDetails } =
    props;

  const [category, setCategory] = useState("kids");
  const [showAddOrderModal, setShowAddOrderModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(true);
  const [kidsOrder, setKidsOrder] = useState();
  const [boysOrder, setBoysOrder] = useState();
  const [menOrder, setMenOrder] = useState();

  useEffect(() => {
    if (_.isEmpty(kidsOrder) && category === "kids")
      setKidsOrder(kidsOrderStructure);
    if (_.isEmpty(boysOrder) && category === "boys")
      setBoysOrder(boysOrderStructure);
    if (_.isEmpty(menOrder) && category === "men")
      setMenOrder(menOrderStructure);
  }, [category]);

  const handleOrderChange = async (val, type, id) => {
    let tempOrderData = _.cloneDeep(
      category === "kids"
        ? kidsOrder
        : category === "boys"
        ? boysOrder
        : menOrder
    );
    if (type === "size") {
      tempOrderData[id].size = val;
    } else if (type === "length") {
      tempOrderData[id].length = parseInt(val);
    } else if (type === "pieces") {
      tempOrderData[id].pieces = parseInt(val);
    }

    category === "kids"
      ? setKidsOrder([...tempOrderData])
      : category === "boys"
      ? setBoysOrder([...tempOrderData])
      : setMenOrder([...tempOrderData]);
    // setOrderDetails({ ...orderContent, category: tempOrderData });
  };

  const addOrder = () => {
    let tempOrderData = _.cloneDeep(
      category === "kids"
        ? kidsOrder
        : category === "boys"
        ? boysOrder
        : menOrder
    );

    category === "kids"
      ? tempOrderData.push({
          length: 18,
          pieces: 1,
        })
      : category === "boys"
      ? tempOrderData.push({
          length: 32,
          pieces: 1,
        })
      : tempOrderData.push({
          size: "M",
          length: 52,
          pieces: 1,
        });

    category === "kids"
      ? setKidsOrder([...tempOrderData])
      : category === "boys"
      ? setBoysOrder([...tempOrderData])
      : setMenOrder([...tempOrderData]);

    // setOrderData([...tempOrderData]);
  };

  const deleteRow = (id) => {
    let tempOrderData = _.cloneDeep(
      category === "kids"
        ? kidsOrder
        : category === "boys"
        ? boysOrder
        : menOrder
    );
    tempOrderData.splice(id, 1);

    category === "kids"
      ? setKidsOrder([...tempOrderData])
      : category === "boys"
      ? setBoysOrder([...tempOrderData])
      : setMenOrder([...tempOrderData]);

    //   setOrderData([...order]);
  };

  const orderDetails = () => {
    return (
      <div className={cx(s.modal)}>
        <div className={s.header}>
          Order Details for {category.toUpperCase()}:
          <Button
            width={"100px"}
            styles={{ marginLeft: "auto" }}
            clickHandler={() => {
              setShowCategoryModal(true);
              setShowAddOrderModal(false);
            }}
          >
            Select Category
          </Button>
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

        {category === "kids" && (
          <>
            <div className={s.body}>
              {_.size(kidsOrder) === 0 ? (
                <div className={s.emptyBody}>No Order Detials yet.</div>
              ) : (
                Array.isArray(kidsOrder) &&
                kidsOrder.map((ord, i) => (
                  <div className={s.inputContent}>
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
                      alt="Delete Row"
                      onClick={() => {
                        deleteRow(i);
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {category === "boys" && (
          <>
            <div className={s.body}>
              {_.size(boysOrder) === 0 ? (
                <div className={s.emptyBody}>No Order Detials yet.</div>
              ) : (
                Array.isArray(boysOrder) &&
                boysOrder.map((ord, i) => (
                  <div className={s.inputContent}>
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
                      alt="Delete Row"
                      onClick={() => {
                        deleteRow(i);
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {category === "men" && (
          <>
            <div className={s.body}>
              {_.size(menOrder) === 0 ? (
                <div className={s.emptyBody}>No Order Detials yet.</div>
              ) : (
                Array.isArray(menOrder) &&
                menOrder.map((ord, i) => (
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
                      alt="Delete Row"
                      onClick={() => {
                        deleteRow(i);
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          </>
        )}

        <div className={s.footer}>
          <Button
            width={"80px"}
            clickHandler={() => {
              setOrderDetails({ ...orderContent });
              setShowAddOrderModal(false);
              setShowCategoryModal(true);
            }}
          >
            Cancel
          </Button>
          <Button
            width={"80px"}
            clickHandler={() => {
              setOrderDetails({
                ...orderContent,
                kids: kidsOrder,
                boys: boysOrder,
                men: menOrder,
              });
              setShowAddOrderModal(false);
              setShowCategoryModal(true);
            }}
          >
            Save
          </Button>
        </div>
      </div>
    );
  };

  const selectCategory = () => {
    return (
      <div className={cx(s.modal, s.categoryModal)}>
        <Button
          height={"50px"}
          width={"10px"}
          baseColor={"inherit"}
          color={"#fff"}
          styles={{
            fontWeight: "bold",
            fontSize: "20px",
            marginLeft: "auto",
            marginBottom: "10px",
            padding: "0px",
          }}
          clickHandler={() => {
            setShowOrderModal(false);
          }}
        >
          X
        </Button>
        <div className={s.categoryButtons}>
          <Button
            width={"200px"}
            height={"50px"}
            styles={{ fontSize: "20px" }}
            clickHandler={() => {
              setCategory("kids");
              setShowAddOrderModal(true);
              setShowCategoryModal(false);
            }}
          >
            Kids
          </Button>
          <Button
            width={"200px"}
            height={"50px"}
            styles={{ fontSize: "20px" }}
            clickHandler={() => {
              setCategory("boys");
              setShowAddOrderModal(true);
              setShowCategoryModal(false);
            }}
          >
            Boys
          </Button>
          <Button
            width={"200px"}
            height={"50px"}
            styles={{ fontSize: "20px" }}
            clickHandler={() => {
              setCategory("men");
              setShowAddOrderModal(true);
              setShowCategoryModal(false);
            }}
          >
            Men
          </Button>
        </div>

        <Button
          height={"50px"}
          width={"10px"}
          baseColor={"inherit"}
          color={"#fff"}
          styles={{
            fontWeight: "bold",
            fontSize: "14px",
            marginLeft: "auto",
            marginTop: "10%",
            padding: "0px",
          }}
          clickHandler={() => {
            setShowOrderModal(false);
          }}
        >
          Ok
        </Button>
      </div>
    );
  };

  const showModal = () => {
    return (
      <>
        {showCategoryModal && selectCategory()}
        {showAddOrderModal && orderDetails()}
      </>
    );
  };

  return <div className={s.container}>{showOrderModal && showModal()}</div>;
}

export default CreateOrder;
