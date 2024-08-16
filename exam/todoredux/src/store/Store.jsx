import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Reducer'; // Adjust the import path if necessary

 export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});


