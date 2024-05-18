
import React, {useState, useEffect} from 'react'
import style from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux'
import MenuItems, { IItem } from '../../models/Backet'

import { BucketActionTypes } from '../../store/bucketReducer'

  

function MenuItemList() {



    let [photo, setPhoto] = useState([])
    let [itemList, setItemList] = useState<IItem[]>([])
    let [page, setPage] = useState(1)
    let [totalPage, setTotalPage] = useState(1)
    const perPage = 3
    const menuItems = new MenuItems()
    const dispatch = useDispatch()

  useEffect(() => 
    menuItems.fetchMenu(perPage, page, setTotalPage, setItemList, itemList)
  
    ,[page])

  
    // const existingItem = state.items.find(item => item.id === action.payload.id)

  const addToBacket = (item: IItem) => {
    if(menuItems.id === item.id){

      dispatch({type: BucketActionTypes.ADD_NUMBER, payload: 1})
    }else{

      dispatch({ type: BucketActionTypes.ADD_TO_BACKET, payload: item });
    }
  }
  // const addToBacket = (item: IItem) => {
  //   if(item.id){

  //     dispatch({type: BucketActionTypes.ADD_NUMBER, payload: 1})
  //   }
  //   dispatch({ type: BucketActionTypes.ADD_TO_BACKET, payload: item });
  // }

  


  return (
    <div>
        <div className={style.itemListContainer}>
        {itemList.map((item:IItem, id) => (
          <div  key={id}>
            <div className={style.menuListContainer}>
                <img className={style.itemImg} src={item.avatar} />
                <p>{item.first_name}</p>
                <p>{item.last_name}</p>
                <button onClick={() => addToBacket(item)} className={style.buyBtn}>Add to backet</button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.btnContainer}>
        {page !== perPage + 1 && <button className={style.loadMore} onClick={() => setPage(page + 1)}>Load more</button>}
      </div>
     
    </div>
  )
}

export default MenuItemList