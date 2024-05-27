

import { combineReducers, legacy_createStore as createStore} from 'redux'
import { bucketReducer } from './bucketReducer'
import { categoryReducer } from './categoryReducer'




 const rootReducer = combineReducers({
    bucket: bucketReducer,
    category: categoryReducer
 })

 const store = createStore(rootReducer)



 export default store
