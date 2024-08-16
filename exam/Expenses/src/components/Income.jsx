import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../utils/Utils'
import { useState } from 'react'

function Income() {

  const {state} = useContext(ExpenseContext)
  const [income , setIncome] = useState(0)
  const [expenses , setExpenses] =useState(0)

  const calculateIncome =()=> {
  const data1 =  state.reduce((acc,cv)=>{
      if(cv.amount > 0){
        return (acc+= parseInt(cv.amount))
      }
      return acc
  },0)

  setIncome(data1)
  }


  const calculateExpenses = ()=>{
    const data2 = state.reduce((acc, cv)=>{
            if(cv.amount <0) {
              return (acc += parseInt(cv.amount))
            }
            return acc;
    },0)

    setExpenses(data2 * -1)
  }

  useEffect(()=>{
    calculateIncome()
    calculateExpenses()
  },[state])

  return (
    <>
        <div className='Income'>
            <div className='income-container'>
                <p>Income</p>
                <h5>${income}</h5>
            </div>

            <div className='line'></div>

            <div className='expenses-container'>
                <p>Expenses</p>
                <h5>${expenses}</h5>
            </div>


        </div>
    </>
  )
}

export default Income
