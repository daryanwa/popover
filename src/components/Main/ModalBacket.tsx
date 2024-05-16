import React, { RefObject, useEffect, useRef } from 'react';
import style from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { BucketActionTypes } from '../../store/bucketReducer';
import { IItem } from '../../models/Backet';
import { current } from '@reduxjs/toolkit';



const ModalBacket = () => {
  const dispatch = useDispatch();
  const bucketItems = useSelector((state: any) => state.items);
  const bucketValue = useSelector((state: any) => state.count);
  const openCloseModal = useSelector((state:any) => state.open)


  const deleteItem = (item: any) => {
    dispatch({ type: BucketActionTypes.MINUS_NUMBER, payload: 1 });
    if (bucketValue <= 1) {
      dispatch({ type: BucketActionTypes.DELETE_FROM_BACKET, payload: item.id });
    }
  };


  const addToBacket = (item: IItem) => {
    if (item.id) {
      dispatch({ type: BucketActionTypes.ADD_NUMBER, payload: item });
    }
  };






  return (
 

    <div   className={style.modalContainer}>
      {bucketItems.map((item: any, index: number) => (
        <div className={style.modalItemContainer} key={index}>
          <img className={style.modalItemImg} src={item.avatar} alt="Avatar" />
          <p className={style.first_nameContainer}>{item.first_name}</p>
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
