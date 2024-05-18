import React, { RefObject, useEffect, useRef } from 'react';
import style from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { BucketActionTypes } from '../../store/bucketReducer';
import { DataMenuItems} from '../../models/Backet';
import { current } from '@reduxjs/toolkit';



const ModalBacket = () => {
  const dispatch = useDispatch();
  const bucketItems = useSelector((state: any) => state.items);
  const bucketValue = useSelector((state: any) => state.count);



  const deleteItem = (item: any) => {
   
    dispatch({ type: BucketActionTypes.MINUS_NUMBER, payload: item.id});
    if (bucketValue <= 1) {
      dispatch({ type: BucketActionTypes.DELETE_FROM_BACKET, payload: item.id });
    }
  };


  const addToBacket = (item: DataMenuItems) => {
    const existingItem = bucketItems.find((bucketItem: DataMenuItems) => bucketItem.id === item.id);
    if (existingItem) {
        dispatch({ type: BucketActionTypes.ADD_NUMBER, payload: item.id });
    } else {
        const newItem = { ...item, count: 1 }; // Убедитесь, что count не undefined
        dispatch({ type: BucketActionTypes.ADD_TO_BACKET, payload: newItem });
    }
};




  return (
 

    <div   className={style.modalContainer}>
      {bucketItems.map((item: any, index: number) => (
        <div className={style.modalItemContainer} key={item.id}>
          <img className={style.modalItemImg} src={item.image} alt="Avatar" />
          <p className={style.first_nameContainer}>{item.name}</p>
          <button className={style.deleteBtn} onClick={() => deleteItem(item)}>-</button>
          <div className={style.bucketValue}>{bucketValue}</div>
          <button className={style.deleteBtn} onClick={() => addToBacket(item)}>+</button>
          
        </div>
      ))}
      {bucketItems.length <= 0 ? 'Bucket is empty' :
        <div>
          <p>Total position: {bucketValue}</p>
          <p>Price: {bucketValue} $</p>
          <button className={style.buyBtn}>Checkout</button>
        </div>
      }
    </div>
     
  );
}

export default ModalBacket;
