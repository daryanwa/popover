import React, { useEffect, useRef } from 'react';
import basket from '../../images/basket.png';
import style from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalBacket from './ModalBacket';
import { BucketActionTypes } from '../../store/bucketReducer';

const Backet = () => {
  const dispatch = useDispatch();
  const addToBucket = useSelector((state: any) => state.bucket.items);
  const openCloseModal = useSelector((state: any) => state.bucket.open);
  const myref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const closeModalClick = (e: MouseEvent) => {
      if (myref.current && !myref.current.contains(e.target as Node)) {
        dispatch({ type: BucketActionTypes.CLOSE_MODAL });
      }
    };

    document.addEventListener('mousedown', closeModalClick);
    return () => {
      document.removeEventListener('mousedown', closeModalClick);
    };
  }, [dispatch]);

  const openModal = () => {
    if (myref.current) {
      dispatch({ type: BucketActionTypes.CLOSE_MODAL });
    }
    dispatch({ type: BucketActionTypes.OPEN_MODAL });
  };
  const sumItem = () => {
    let sum = 0
    let a = addToBucket.map((item:any) => item.count)
    for(let item of a){
      sum += item
    }
    return sum
  }

  return (
    <div>
      <div className={style.modalDivContainer}>
        {openCloseModal ? (
          <div ref={myref}>
            <ModalBacket />
          </div>
        ) : (
          ''
        )}
        <div className={style.basketContainer} onClick={() => openModal()}>
          {addToBucket.length <= 0 ? (
            <img className={style.basket} src={basket} alt="Basket" />
          ) : (
            <div>
              <div className={style.backetNum}>{sumItem()}</div>
              <img className={style.basket} src={basket} alt="Basket" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Backet;
