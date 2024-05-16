import React, { useEffect, useRef, useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css'
import style from './Header.module.css'
import logo from '../../images/logo.png'
import basket from '../../images/basket.png'
import search from '../../images/search.png'
import { useDispatch, useSelector } from 'react-redux'
import ModalBacket from '../Main/ModalBacket'
import { BucketActionTypes } from '../../store/bucketReducer'

function HeaderComponent() {

  const dispatch = useDispatch()
  const addToBucket = useSelector((state: any) => state.count)
  const openCloseModal = useSelector((state: any) => state.open);
  const myref = useRef<HTMLDivElement>(null);

  const handleMenuClick = (e:any) => {
    e.preventDefault()
    let mainsection = document.getElementById('main-section')
    if(mainsection){
      mainsection.scrollIntoView()
    }
  }
  const handleMenuClickAbout = (e:any) => {
    e.preventDefault()
    let mainsection = document.getElementById('contact-section')
    if(mainsection){
      mainsection.scrollIntoView()
    }
  }



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

  

console.log(myref)

  return (
    <header className={style.headerContainer}>
      <div className={style.posFix}>

       <div className={style.logoAndName}>
        <h1 className={style.logoName}>NoodlEat</h1>
            <a className={style.logoContainer} href='/'>
                <img className={style.logo} src={logo} />
                
            </a>
       </div>
       <div className={style.liBtnContainer}>
        <ul className={style.ulBtn}>
            <li  className={style.liBtn} onClick={handleMenuClick}>Menu</li>
            <li className={style.liBtn}>About</li>
            <li className={style.liBtn } onClick={handleMenuClickAbout}>Contact</li>
        </ul>
       </div>
       <div className={style.buttonContainer}>
        
        <img  className={style.basket} src={search} />
     
        <div >
        <div className={style.modalDivContainer}>
          {openCloseModal ?
            <div ref={myref}>
                <ModalBacket /> 
            </div> : ' '
          }
           
             </div> 
          {addToBucket <= 0 ?  <img   className={style.basket} src={basket}
           /> 
          :  <div>
          <div className={style.backetNum}>
           {addToBucket}
           
            </div> 
           
              <img onClick={() => openModal()}  className={style.basket} src={basket} />
           
          </div>
          }
       
        
          </div>
         </div>
         
       </div>
        
        
    </header>
 
  )
}

export default HeaderComponent