import React, { useEffect, useRef } from 'react'
import style from './Main.module.css'
import arrow from '../../images/arrow.png'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryList, categoryReducer } from '../../store/categoryReducer'




const CategoryItem  = () => {


const dispatch = useDispatch()
const setCategory = (category: CategoryList) => {
  dispatch({type: 'SET_CATEGORY', payload: category})
}  




  return (
    <div>
        <div className={style.categoryContainer}>
            <div className={style.categoryUl}>
                <div className={style.itemCategory} onClick={() => setCategory(CategoryList.BOWL)}  >Poke Bowl <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory} onClick={() => setCategory(CategoryList.SUSHI)}>Sushi <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory} onClick={() => setCategory(CategoryList.HOT)}>Hot food <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory} onClick={() => setCategory(CategoryList.COLD)}>Cold food <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory} onClick={() => setCategory(CategoryList.SOUCE)}>Souce's <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory} onClick={() => setCategory(CategoryList.DRINK)}>Drinks <img className={style.arrow} src={arrow} /></div>
               
            </div>
        </div>
    </div>
  )
}

export default CategoryItem