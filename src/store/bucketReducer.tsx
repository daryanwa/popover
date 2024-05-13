
interface IState {
    type: string
    action: number[]
}

const defaultState: IState = {
    type: '',
    action: [
        
    ]

}


interface IAddItem {
    type: 'ADD_ITEM',
    payload: number
}


type Action = IAddItem

export const bucketReducer  = (state: IState = defaultState, action: Action) => {
    switch(action.type){

        case "ADD_ITEM":
        return {...state, 
            action: [...state.action, action.payload]
        }
        
        default:
            return state
        }
}


