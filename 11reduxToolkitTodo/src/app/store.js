import {configureStore} from '@reduxjs/toolkit'
//The configureStore function is a utility provided by Redux Toolkit (RTK) to simplify the setup and configuration of a Redux store
//Step1 :Always star with making a store called single source of truth
import todoReducer from '../features/Todo/TodoSlice'

export const store=configureStore({
    reducer:todoReducer//key:value ke pair mei reducer mention kr do
})
////store.js needs to be  aware about all reducers , since it is a restrictive store ,it doesn't update value from any reducers 
// , it only take and update values from registered reducers