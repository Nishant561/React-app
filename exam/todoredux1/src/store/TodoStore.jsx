import {configureStore} from '@reduxjs/toolkit'
import nishantReducer from './Reducer'

export const store = configureStore({
    reducer:{
        todo: nishantReducer
    }
})