
import { ILocalData } from "../models/Backet"



interface ICategoryState {
    category: ILocalData[];
    selectedCategory: string;
}

interface SetCategoryAction {
    type: 'SET_CATEGORY';
    payload: CategoryList;
}


export enum CategoryList{
    BOWL = 'bowl',
    SUSHI = 'sushi',
    HOT = 'hot',
    COLD = 'cold',
    SOUCE = 'souce',
    DRINK = 'drink'
}


const defaultState:ICategoryState =  {
    category: [],
    selectedCategory: ''
}


type TAction = SetCategoryAction

export const categoryReducer = (state = defaultState, action:TAction ) => {
    switch(action.type){
        case 'SET_CATEGORY':
            return  {
                ...state,
                selectedCategory: action.payload
                
            }
        default:
            return state

    }
}