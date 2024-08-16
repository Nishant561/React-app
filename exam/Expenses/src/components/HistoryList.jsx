import React from 'react'
import { useContext } from 'react';
import { SlClose } from "react-icons/sl";
import { ExpenseContext } from '../utils/Utils';
import { useState } from 'react';
import { useEffect } from 'react';
function HistoryList() {

    const {state ,dispatch} = useContext(ExpenseContext)
   
    const [data , setData] = useState([])

  const deleteHandler = (id)=>{
    dispatch({
      type: 'Delete',
      payload:{
        id: id,
      }
    })
  }

    useEffect(()=>{
        setData(state)
    },[state ,data])

  return (
    <>
      <div className='history-list'>
        
        {
            data.map((items,i)=>(
                <div key={i} className='cross-align'>
                <span className='close'  onClick={()=> deleteHandler(items.id)}>
                    <SlClose/>
                </span>
            <div className='list'>
                    
                    <p>{items.text} <span className='amount'>${items.amount}</span></p>
                     
                </div>
            </div>
            ))
        }
        
        
        
                
                
      </div>
    </>
  )
}

export default HistoryList
