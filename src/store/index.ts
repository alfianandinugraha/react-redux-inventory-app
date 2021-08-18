import { createStore } from 'redux'
import foodReducer from '@/store/Product/Reducers'

const store = createStore(foodReducer)

export default store
