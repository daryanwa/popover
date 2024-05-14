import { IItem } from "../models/Backet";




export interface AddToBasketAction {
    type: BucketActionTypes;
    payload: IItem;
}

export enum BucketActionTypes {
    ADD_TO_BACKET = "ADD_TO_BACKET",
    DELETE_FROM_BACKET = "DELETE_FROM_BACKET",
    ADD_NUMBER = "ADD_NUMBER",
    MINUS_NUMBER = "MINUS_NUMBER"
}


interface IBucketState {
    items: IItem[];
    count: number
}

const defaultState: IBucketState = {
    items: [],
    count: 0
}
type Action  = AddToBasketAction & { count?: number };

export const bucketReducer = (state: IBucketState = defaultState, action: Action):IBucketState => {
    switch(action.type){
        case BucketActionTypes.ADD_TO_BACKET:
            
            return {...state, items: [...state.items, action.payload]}
        case BucketActionTypes.DELETE_FROM_BACKET: 
            return {...state, items: state.items.filter((item) => item.id !== action.payload )}
        case BucketActionTypes.ADD_NUMBER:
            return{...state ,count:  state.count + 1}
        case BucketActionTypes.MINUS_NUMBER: 
            return {...state, count: state.count - 1}
        default:
            return state
    }
}
