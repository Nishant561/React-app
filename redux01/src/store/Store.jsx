import {configureStore} from '@reduxjs/toolkit'
import countersReducer  from '../features/CreateSlice'

export const store = configureStore({
    reducer:{
        counters:countersReducer,
    }
})