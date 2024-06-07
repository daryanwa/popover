import React, { useEffect } from "react";
import style from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BucketActionTypes } from "../../store/bucketReducer";
import { DataMenuItems } from "../../models/Backet";

const ModalBacket = () => {
  const dispatch = useDispatch();
  const bucketItems = useSelector((state: any) => state.items);
  const bucketValue = useSelector((state: any) =>
    state.items.reduce(
      (acc: number, item: DataMenuItems) => acc + item.count,
      0
    )
  );

  const deleteItem = (item: DataMenuItems) => {
    if (item.count > 1) {
      dispatch({ type: BucketActionTypes.MINUS_NUMBER, payload: item.id });
    } else {
      dispatch({
        type: BucketActionTypes.DELETE_FROM_BACKET,
        payload: item.id,
      });
    }
  };

  const addToBacket = (item: DataMenuItems) => {
    const existingItem = bucketItems.find(
      (bucketItem: DataMenuItems) => bucketItem.id === item.id
    );
    if (existingItem) {
      dispatch({ type: BucketActionTypes.ADD_NUMBER, payload: item.id });
    } else {
      dispatch({ type: BucketActionTypes.ADD_TO_BACKET, payload: item });
    }
  };

  useEffect(() => {
    console.log(bucketItems);
    console.log(bucketValue);
  }, [bucketValue, bucketItems]);

  const price = () => {
    return bucketItems.reduce(
      (sum: number, item: DataMenuItems) => sum + item.price * item.count,
      0
    );
  };

  const totalPos = () => {
    return bucketItems.reduce(
      (total: number, item: DataMenuItems) => total + item.count,
      0
    );
  };

  return (
    <div className={style.modalContainer}>
      {bucketItems.map((item: DataMenuItems) => (
        <div className={style.modalItemContainer} key={item.id}>
          <img className={style.modalItemImg} src={item.image} alt="Avatar" />
          <p className={style.first_nameContainer}>{item.name}</p>
          <p style={{ fontSize: "2vh" }}>{item.price * item.count}$</p>
          <button className={style.deleteBtn} onClick={() => deleteItem(item)}>
            -
          </button>
          <div className={style.bucketValue}>{item.count}</div>
          <button className={style.deleteBtn} onClick={() => addToBacket(item)}>
            +
          </button>
        </div>
      ))}
      {bucketItems.length <= 0 ? (
        "Bucket is empty"
      ) : (
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "1.5vh" }}>Total position: {totalPos()}</p>
          <p style={{ fontSize: "2vh" }}>
            Price: <span style={{ fontWeight: "bold" }}>{price()} $</span>
          </p>
          <button className={style.buyBtn}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ModalBacket;
