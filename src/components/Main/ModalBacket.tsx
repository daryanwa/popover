import React, { RefObject, useEffect, useRef } from 'react';
import style from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { BucketActionTypes } from '../../store/bucketReducer';
import { DataMenuItems} from '../../models/Backet';
import { current } from '@reduxjs/toolkit';
import { data } from '../../services/data';



const ModalBacket = () => {
  const dispatch = useDispatch();
  const bucketItems = useSelector((state: any) => state.items);
  const bucketValue = useSelector((state: any) => state.count);
  
  const deleteItem = (item: any) => {
    const existingItem = bucketItems.find((bucketItem: DataMenuItems) => bucketItem.id === item.id );
    // console.log(existingItem)
    if(existingItem){
      
        dispatch({ type: BucketActionTypes.MINUS_NUMBER, payload: existingItem.count--});
      
      if (existingItem.count < 1) {
        dispatch({ type: BucketActionTypes.DELETE_FROM_BACKET, payload: item.id });
      }
    }
    };


  const addToBacket = (item: DataMenuItems) => {
    const existingItem = bucketItems.find((bucketItem: DataMenuItems) => bucketItem.id === item.id );
    // console.log(existingItem)
 

 
    if (existingItem) {
      dispatch({ type: BucketActionTypes.ADD_NUMBER, payload: existingItem.count++});
    }else{

      dispatch({ type: BucketActionTypes.ADD_TO_BACKET, payload: item });
    }
      
    
};

useEffect(() => {

  console.log(bucketItems)
  console.log(bucketValue)
}
  ,[bucketValue, bucketItems])


let atributes = bucketItems.map((item: DataMenuItems) => item.price)

const price = () => {
  let sum = 0
  for(let key of atributes){
    sum+=key
  }
return sum
}

const totalPos = () => {
  let total = 0
  for(let key of bucketItems){
    total += key.count
  }
  return total
}

  return (
 

    <div   className={style.modalContainer}>
      {bucketItems.map((item: any) => (
        <div className={style.modalItemContainer} key={item.id}>
          
          <img className={style.modalItemImg} src={item.image} alt="Avatar" />
          <p className={style.first_nameContainer}>{item.name}</p>
          <p style={{fontSize:'2vh'}}>{ item.price * item.count}$</p>
          <button className={style.deleteBtn} onClick={() => deleteItem(item)}>-</button>
          <div className={style.bucketValue}>{item.count}</div>
          <button className={style.deleteBtn} onClick={() => addToBacket(item)}>+</button>
        
        </div>
      ))}
      {bucketItems.length <= 0 ? 'Bucket is empty' :
        <div style={{display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center'}}>
          <p style={{fontSize:'1.5vh', }}> Total position: {totalPos()}</p>
          <p style={{fontSize:'2vh', }}>Price:<span style={{fontWeight:'bold'}}> {price() * totalPos()} $</span></p>
          <button className={style.buyBtn}>Checkout</button>
        </div>
      }
    </div>
     
  );
}

export default ModalBacket;
