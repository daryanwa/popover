import React from 'react'
import style from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux'





function ModalBacket() {

let dispatch = useDispatch()
let selectorBucket = useSelector((state:any) => state.insideBucketItem.items)

  
  return (
    <div>
        <div className={style.modalContainer}>
            {selectorBucket.map((item:any, index:any)=> (
              <div key={index}>{item.id}</div>
            ))}
            <button className={style.buyBtn}>Checkout</button>
        </div>
    </div>
  )
}

export default ModalBacket