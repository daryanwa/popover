// import { IItem } from "../models/Backet";
import { count } from "console";
import { ILocalData } from "../models/Backet";
import { data } from "../services/data";



export interface AddToBasketAction {
    type: BucketActionTypes.ADD_TO_BACKET;
    payload: ILocalData;
}

export interface DeleteFromBasketAction {
    type: BucketActionTypes.DELETE_FROM_BACKET;
    payload: number;
}

export interface AddNumberAction {
    type: BucketActionTypes.ADD_NUMBER;
    payload: ILocalData;
}

export interface MinusNumberAction {
    type: BucketActionTypes.MINUS_NUMBER;
    payload: ILocalData;
}

export interface OpenModalAction {
    type: BucketActionTypes.OPEN_MODAL;
}

export interface CloseModalAction {
    type: BucketActionTypes.CLOSE_MODAL;
}

export type BucketActions =
    | AddToBasketAction
    | DeleteFromBasketAction
    | AddNumberAction
    | MinusNumberAction
    | OpenModalAction
    | CloseModalAction;

export enum BucketActionTypes {
    ADD_TO_BACKET = "ADD_TO_BACKET",
    DELETE_FROM_BACKET = "DELETE_FROM_BACKET",
    ADD_NUMBER = "ADD_NUMBER",
    MINUS_NUMBER = "MINUS_NUMBER",
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
}

interface IBucketState {
    items: ILocalData[];
    count: number;
    open: boolean;
}

const defaultState: IBucketState = {
    items: [],
    count: 1,
    open: false
};


export const bucketReducer = (state: IBucketState = defaultState, action: BucketActions):IBucketState => {
    switch(action.type){
        case BucketActionTypes.ADD_TO_BACKET: {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, count: 1 }]
                };
            }
        }
         
            case BucketActionTypes.DELETE_FROM_BACKET: {
                return {
                    ...state,
                    items: state.items.filter((item) => item.id !== action.payload)
                };
            }
            case BucketActionTypes.ADD_NUMBER: 
                return {
                    ...state, count: action.payload.count
                }
            //     const existingItem = state.items.find(item => item.id === action.payload.id);
            //     if(existingItem){
               
            //         return {
            //             ...state,
            //             count: existingItem.count 
            //         }
            //     }else{
            //         return state
            //     }
            // }

             

            case BucketActionTypes.MINUS_NUMBER: 
                const existingItem = state.items.find(item => item.id === action.payload.id);
                if(existingItem){
                    return {...state, count: state.count - 1}
                }else{
                    return state
                }
            //     if (existingItem) {
            //         if (existingItem.count > 1) {
            //             return {
            //                 ...state,
            //                 items: state.items.map(item =>
            //                     item.id === action.payload.id
            //                         ? { ...item, count: item.count - 1 }
            //                         : item
            //                 )
            //             };
            //         } else {
            //             return {
            //                 ...state,
            //                 items: state.items.filter(item => item.id !== action.payload.id)
            //             };
            //         }
            //     } else {
            //         return state;  
            //     }
            // }
        case BucketActionTypes.OPEN_MODAL:
            return {...state, open: true}
        case BucketActionTypes.CLOSE_MODAL:
            return {...state, open: false}
            
        default:
            return state
    }
}
