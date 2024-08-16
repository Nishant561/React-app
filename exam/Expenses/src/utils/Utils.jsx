import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'


const initialState = [
    
        {id:1 , text:'Home' , amount: 500},
        {id:2 , text:'Shopping' , amount: -300},
        {id:3 , text:'Girl-Friend' , amount: 100}

]
    
    


export const ExpenseContext = createContext(initialState)
const reducer = (state ,action)=>{

    if(action.type === 'Add'){
        return [...state, action.payload.expense]
    }

    if(action.type ==='Delete'){
      const data = state.filter((item , i)=> item.id !== action.payload.id)

      return data;
    }

    return state;
}



function Utils({children}) {

    const [state , dispatch] = useReducer(reducer , initialState)

    

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default Utils
