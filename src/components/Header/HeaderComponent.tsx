import React, { useEffect, useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css'
import style from './Header.module.css'
import logo from '../../images/logo.png'
import basket from '../../images/basket.png'
import search from '../../images/search.png'
import { useDispatch, useSelector } from 'react-redux'
import ModalBacket from '../Main/ModalBacket'

function HeaderComponent() {

  let [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch()
  const addToBucket = useSelector((state: any) => state.action)


  const handleMenuClick = (e:any) => {
    e.preventDefault()
    let mainsection = document.getElementById('main-section')
    if(mainsection){
      mainsection.scrollIntoView()
    }
  }


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
            <li className={style.liBtn}>Contact</li>
        </ul>
       </div>
       <div className={style.buttonContainer}>
        
        <img  className={style.basket} src={search} />
     
        <div onClick={() => setOpenModal(!openModal)}>
        <div className={style.modalDivContainer}>
             {openModal ? <ModalBacket /> : ''}
             </div> 
          {addToBucket <= 0 ?  <img   className={style.basket} src={basket}
           /> 
          :  <div>
          <div className={style.backetNum}>
           {addToBucket}
           
            </div> 
           
              <img onClick={() => setOpenModal(!openModal)}  className={style.basket} src={basket} />
           
          </div>
          }
       
        
          </div>
         </div>
         
       </div>
        
        
    </header>
 
  )
}

export default HeaderComponent