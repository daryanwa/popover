
import { bucketReducer } from "./bucketReducer";
import { combineReducers, legacy_createStore as createStore} from 'redux'
import { insideBucketItem } from "./insideBucketItem";


const rootReducer = combineReducers({
    bucket: bucketReducer,
    insideBucket: insideBucketItem

})

 const store = createStore(rootReducer)



 export default store
