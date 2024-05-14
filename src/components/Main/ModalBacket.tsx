// components/ModalBasket.tsx

import React from 'react';
import style from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { BucketActionTypes } from '../../store/bucketReducer';
function ModalBasket() {



    const dispatch = useDispatch();
    const bucketItems = useSelector((state: any) => state.items); 
    const deleteItem = (item:any) => {
      dispatch({type: BucketActionTypes.DELETE_FROM_BACKET, payload: item.id})
      dispatch({type: BucketActionTypes.MINUS_NUMBER, payload: 1})
      
    }

    return (
        <div>
            <div className={style.modalContainer}>
            

                {bucketItems.map((item: any, index: number) => (
                  <div className={style.modalItemContainer} key={index}>
                        <img className={style.modalItemImg} src={item.avatar} />
                        <p className={style.first_nameContainer}>{item.first_name} </p>
                      <button className={style.deleteBtn}  onClick={() => deleteItem(item)} >-</button>
                     
                    </div>
                ))}
                {
                  bucketItems.length <= 0 ? 'Bucket is empty' 
                  : <div>
                    <p>Total position: {bucketItems.length}</p>
                    <p>Price: {bucketItems.length} $</p>
                    <button className={style.buyBtn}>Checkout</button>
                    </div>
                }
            
            </div>
        </div>
    );
}

export default ModalBasket;
