
// import { bucketReducer } from "./bucketReducer";
import { combineReducers, legacy_createStore as createStore} from 'redux'
import { bucketReducer } from './bucketReducer'
// import { insideBucketItem } from "./insideBucketItem";




 const store = createStore(bucketReducer)



 export default store
