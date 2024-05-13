import React, { useEffect, useState } from 'react'
import basket from '../../images/basket.png'
import style from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ModalBacket from './ModalBacket'
function Backet() {

  let [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch()
  const addToBucket = useSelector((state: any) => state.action)

  


  return (
    <div>
        <div className={style.modalDivContainer}>
          {openModal ? <ModalBacket /> : ''}
        </div>    
        <div className={style.basketContainer} onClick={() => setOpenModal(!openModal)}>
        {addToBucket <= 0 ?  <img  className={style.basket} src={basket} /> 
          :  <div>
          <div className={style.backetNum}>
           {addToBucket}
            </div> 
           <img  className={style.basket} src={basket} />
          </div>
          }

          
        </div>
    </div>
  )
}

export default Backet