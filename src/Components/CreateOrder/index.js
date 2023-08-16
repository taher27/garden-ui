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
  const {
    showOrderModal,
    setShowOrderModal,
    orderContent,
    setOrderDetails,
    setClothMeter,
  } = props;

  const [category, setCategory] = useState("kids");
  const [showAddOrderModal, setShowAddOrderModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(true);
  const [kidsOrder, setKidsOrder] = useState();
  const [boysOrder, setBoysOrder] = useState();
  const [menOrder, setMenOrder] = useState();
  const [pano, setPano] = useState({});

  useEffect(() => {
    if (
      (_.isEmpty(kidsOrder) || _.isEmpty(orderContent.kids)) &&
      category === "kids"
    )
      setKidsOrder(kidsOrderStructure);
    if (
      (_.isEmpty(boysOrder) || _.isEmpty(orderContent.boys)) &&
      category === "boys"
    )
      setBoysOrder(boysOrderStructure);
    if (
      (_.isEmpty(menOrder) || _.isEmpty(orderContent.men)) &&
      category === "men"
    )
      setMenOrder(menOrderStructure);
    if (_.isEmpty(pano)) setPano({ kids: 58, boys: 58, men: 58 });
  }, [category, kidsOrder, boysOrder, menOrder, pano]);

  const handleOrderChange = (val, type, id) => {
    let tempOrderData = _.cloneDeep(
      category === "kids" ? kidsOrder : boysOrder
    );
    if (type === "size") {
      tempOrderData[id].size = val;
    } else if (type === "length") {
      tempOrderData[id].length = _.isNaN(parseInt(val)) ? 0 : parseInt(val);
    } else if (type === "pieces") {
      tempOrderData[id].pieces = _.isNaN(parseInt(val)) ? 0 : parseInt(val);
    }

    category === "kids"
      ? setKidsOrder([...tempOrderData])
      : setBoysOrder([...tempOrderData]);

    // setOrderDetails({ ...orderContent, category: tempOrderData });
  };

  const handleMenOrderChange = (row, column, val) => {
    let tempOrderData = _.cloneDeep(menOrder);
    tempOrderData[row][column] = _.isNaN(parseInt(val)) ? 0 : parseInt(val);
    setMenOrder(tempOrderData);
  };

  const addOrder = () => {
    let tempOrderData = _.cloneDeep(
      category === "kids" ? kidsOrder : boysOrder
    );

    category === "kids"
      ? tempOrderData.push({
          length: 18,
          pieces: 1,
        })
      : tempOrderData.push({
          length: 32,
          pieces: 1,
        });

    category === "kids"
      ? setKidsOrder([...tempOrderData])
      : setBoysOrder([...tempOrderData]);

    // setOrderData([...tempOrderData]);
  };

  const deleteRow = (id) => {
    let tempOrderData = _.cloneDeep(
      category === "kids" ? kidsOrder : boysOrder
    );
    tempOrderData.splice(id, 1);

    category === "kids"
      ? setKidsOrder([...tempOrderData])
      : setBoysOrder([...tempOrderData]);

    //   setOrderData([...order]);
  };

  const calculateTotalClothMeters = () => {
    let sum = 0;
    sum += getTotalClothRequired({
      category: "kids",
    });
    sum += getTotalClothRequired({
      category: "boys",
    });
    sum += getTotalClothRequired({
      category: "men",
    });

    setClothMeter(sum);
    return sum;
  };

  const getTotalClothRequired = (props) => {
    let clothMeter = 0;
    let extraClothMeter = 0;

    if (props.category === "kids") {
      !_.isEmpty(kidsOrder) &&
        kidsOrder.forEach((item) => {
          clothMeter += item.pieces;
        });

      // Doing conditionally multiplication based on Pano
      if (pano.kids === 58) clothMeter *= 0.7;
      else clothMeter *= 0.65;
    } else if (props.category === "boys") {
      !_.isEmpty(boysOrder) &&
        boysOrder.forEach((item) => {
          clothMeter += item.pieces;
        });

      // Doing conditionally multiplication based on Pano
      if (pano.boys === 58) clothMeter *= 1.4;
      else clothMeter *= 1.3;
    } else if (props.category === "men") {
      !_.isEmpty(menOrder) &&
        menOrder.forEach((item) => {
          item.forEach((data, i) => {
            if (i < 4) {
              clothMeter += data;
            } else if (i > 3) {
              extraClothMeter += data;
            }
          });
        });

      // Doing conditionally multiplication based on Pano for s,m,l,xl
      if (pano.men === 58) {
        clothMeter *= 2.4;
      } else {
        clothMeter *= 2.3;
      }

      // Doing conditionally multiplication based on Pano for xxl, xxxl
      if (pano.men === 58) {
        extraClothMeter *= 2.75;
      } else {
        extraClothMeter *= 2.65;
      }
      clothMeter += extraClothMeter; // extraClothMeter values incase of xxl,xxxl;
    }

    return Math.ceil(clothMeter);
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
            isDisable={category === "men"}
          >
            Add Row
          </Button>
        </div>

        {(category === "kids" || category === "boys" || category === "men") && (
          <>
            <div>
              <span style={{ color: "white", fontWeight: "bold" }}>Pano: </span>
            </div>
            <div className={s.radiobutton}>
              <input
                type="radio"
                id="pano_58"
                name="pano"
                checked={pano[category] === 58}
                onChange={() => {
                  setPano({ ...pano, [category]: 58 });
                }}
              />
              <label html_for="pano_58">58</label>
              <input
                type="radio"
                id="pano_62"
                name="pano"
                checked={pano[category] === 62}
                onChange={() => {
                  setPano({ ...pano, [category]: 62 });
                }}
              />
              <label html_for="pano_62">62</label>
            </div>
          </>
        )}

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
                <>
                  <div className={s.inputContent}>
                    {["", 52, 54, 56, 58, 60, 62].map((item) => (
                      <InputType
                        type={"text"}
                        placeholder={""}
                        value={item}
                        onChangeHandler={(val) => {}}
                        readOnly={true}
                        styles={{
                          border: "none",
                          backgroundColor: "inherit",
                          textAlign: "center",
                          fontSize: "1.1rem",
                        }}
                      />
                    ))}
                  </div>
                  {Array.isArray(menOrder) &&
                    menOrder.map((row, i) => (
                      <div className={s.inputContent}>
                        <InputType
                          type={"text"}
                          placeholder={"No. of pcs"}
                          value={
                            i === 0
                              ? "S"
                              : i === 1
                              ? "M"
                              : i === 2
                              ? "L"
                              : i === 3
                              ? "XL"
                              : i === 4
                              ? "XXL"
                              : i === 5 && "XXXL"
                          }
                          onChangeHandler={(val) => {}}
                          readOnly={true}
                          styles={{
                            border: "none",
                            backgroundColor: "inherit",
                            textAlign: "center",
                            fontSize: "1.1rem",
                          }}
                        />
                        <InputType
                          type={"text"}
                          placeholder={"No. of pcs"}
                          value={menOrder[0][i]}
                          onChangeHandler={(val) => {
                            handleMenOrderChange(0, i, val);
                          }}
                        />
                        <InputType
                          type={"text"}
                          placeholder={"No. of pcs"}
                          value={menOrder[1][i]}
                          onChangeHandler={(val) => {
                            handleMenOrderChange(1, i, val);
                          }}
                        />
                        <InputType
                          type={"text"}
                          placeholder={"No. of pcs"}
                          value={menOrder[2][i]}
                          onChangeHandler={(val) => {
                            handleMenOrderChange(2, i, val);
                          }}
                        />
                        <InputType
                          type={"text"}
                          placeholder={"No. of pcs"}
                          value={menOrder[3][i]}
                          onChangeHandler={(val) => {
                            handleMenOrderChange(3, i, val);
                          }}
                        />
                        <InputType
                          type={"text"}
                          placeholder={"No. of pcs"}
                          value={menOrder[4][i]}
                          onChangeHandler={(val) => {
                            handleMenOrderChange(4, i, val);
                          }}
                        />
                        <InputType
                          type={"text"}
                          placeholder={"No. of pcs"}
                          value={menOrder[5][i]}
                          onChangeHandler={(val) => {
                            handleMenOrderChange(5, i, val);
                          }}
                        />
                      </div>
                    ))}
                </>
              )}
            </div>
          </>
        )}

        <div className={s.clothMeterCalculation}>
          {`Total Cloth required: ${calculateTotalClothMeters()}`}
        </div>

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
          width={"5px"}
          height={"40px"}
          baseColor={"#008cba"}
          color={"#fff"}
          styles={{
            fontWeight: "bold",
            fontSize: "14px",
            marginLeft: "auto",
            marginTop: "2%",
            marginBottom: "1%",
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
