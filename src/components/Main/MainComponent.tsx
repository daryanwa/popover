import React from 'react'
import style from './Main.module.css'
import MenuItemList from './MenuItemList'
import CategoryItem from './CategoryItem'
import Backet from './Backet'
import { useDispatch, useSelector } from 'react-redux'








function MainComponent() {



  return (
  

    <section >
      <div className={style.mainContainer}>
        <CategoryItem />
        <MenuItemList />
        <Backet />
      </div>
    </section>
     
  )
}

export default MainComponent