
import React, {useState, useEffect} from 'react'
import style from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux'
import MenuItems, { DataMenuItems, IItem, ILocalData } from '../../models/Backet'

import { BucketActionTypes } from '../../store/bucketReducer'
import { data } from '../../services/data'

  

function MenuItemList() {



    let [page, setPage] = useState(9)

    const localItems = new DataMenuItems()
    let local = localItems.fetchLocalData()
    const dispatch = useDispatch()
    const perPage = 9
  const addToBacket = (item:ILocalData ) => {
    if(localItems.id === item.id){

      dispatch({type: BucketActionTypes.ADD_NUMBER, payload: 1})
    }else{

      dispatch({ type: BucketActionTypes.ADD_TO_BACKET, payload: item });
    }
  }   
  
  const loadMore = () => {
    setPage(page + 9)
  }


  return (
    <div>
        <div className={style.itemListContainer}>
        {local.slice(0, page).map((item:ILocalData) => (
          <div  key={item.id}>
            <div className={style.menuListContainer}>
                <img className={style.itemImg} src={item.image} />
                <p>{item.name}</p>
                <p>{item.describe}</p>
                <p style={{fontSize:'2vh'}}>{item.price}$</p>
                <button onClick={() => addToBacket(item)} className={style.buyBtn}>Add to backet</button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.btnContainer}>
        {page !== perPage + 1 && <button className={style.loadMore} onClick={() => loadMore()}>Load more</button>}
      </div>
     
    </div>
  )
}

export default MenuItemList