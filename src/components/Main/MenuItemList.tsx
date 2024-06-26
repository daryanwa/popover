import React, { useState, useEffect } from "react";
import style from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import MenuItems, {
  DataMenuItems,
  IItem,
  ILocalData,
} from "../../models/Backet";

import { BucketActionTypes } from "../../store/bucketReducer";
import { data } from "../../services/data";

function MenuItemList() {
  const [page, setPage] = useState(6);
  // const [selected, setSelected] = useState<string | null>(null)
  const localItems = new DataMenuItems();
  let local = localItems.fetchLocalData();
  const dispatch = useDispatch();
  const perPage = 6;
  const selectedCategory = useSelector(
    (state: any) => state.category.selectedCategory
  );

  const addToBacket = (item: ILocalData) => {
    if (localItems.id === item.id) {
      dispatch({ type: BucketActionTypes.ADD_NUMBER, payload: 1 });
    } else {
      dispatch({ type: BucketActionTypes.ADD_TO_BACKET, payload: item });
    }
  };

  const loadMore = () => {
    setPage(page + 9);
  };

  const setCategory = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : local;

  return (
    <div>
      <div className={style.itemListContainer}>
        {setCategory.slice(0, page).map((item: ILocalData) => (
          <div key={item.id} className={style.menuListContainer}>
            <div className={style.menuListItem}>
              <img className={style.itemImg} src={item.image} />
              <p>{item.name}</p>
              <p>{item.describe}</p>
              <p style={{ fontSize: "2vh" }}>{item.price}$</p>
              <button
                onClick={() => addToBacket(item)}
                className={style.buyBtn}>
                Add to backet
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.btnContainer}>
        {page < data.length ? (
          <button className={style.loadMore} onClick={() => loadMore()}>
            Load more
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MenuItemList;
