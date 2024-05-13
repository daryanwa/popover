import React from 'react'
import style from './Main.module.css'
import arrow from '../../images/arrow.png'

function CategoryItem() {





    
  return (
    <div>
        <div className={style.categoryContainer}>
            <div className={style.categoryUl}>
                <div className={style.itemCategory}>Poke Bowl <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory}>Sushi <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory}>Hot food <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory}>Cold food <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory}>Souce's <img className={style.arrow} src={arrow} /></div>
                <div className={style.itemCategory}>Drinks <img className={style.arrow} src={arrow} /></div>
               
            </div>
        </div>
    </div>
  )
}

export default CategoryItem