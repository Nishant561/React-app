import {configureStore} from '@reduxjs/toolkit'
import nishantReducer from './Reducer'
export const TodoStore = configureStore({
    reducer: {
        todo: nishantReducer,
      },
})