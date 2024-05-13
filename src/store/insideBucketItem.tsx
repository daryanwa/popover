import { IItem } from "../models/Backet"

interface IBucketState {
    items: IItem[]
}


const defaultBucketState: IBucketState = {
    items: [], // Начально пустой список элементов в корзине
  };

// Типы действий
enum BucketActionTypes {
    ADD_ITEM = "ADD_ITEM",
  }
  
  // Определение действий
  interface AddItemAction {
    type: BucketActionTypes.ADD_ITEM;
    payload: IItem;
  }
  
  // Все возможные типы действий
  type BucketAction = AddItemAction;
  
  // Редуктор
  export const insideBucketItem = (state: IBucketState = defaultBucketState, action: BucketAction ) => {
      switch(action.type){
          case BucketActionTypes.ADD_ITEM:
              return { ...state, items: [...state.items, action.payload] };
          default: 
              return state;
      }
  }
  

