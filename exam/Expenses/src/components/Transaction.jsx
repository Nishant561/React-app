import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { ExpenseContext } from '../utils/Utils'
import Button from './Button'
import {nanoid} from 'nanoid'
function Transaction() {

    const [Title , setTitle] = useState('')
    const [amount , setAmount] = useState('')
    const {state , dispatch} = useContext(ExpenseContext)

  const formHandler = (e)=>{
    console.log('hell')
    e.preventDefault()

    if(Title.trim().length <0 || amount ==='' ){
      alert('Please enter the valid value.')
      return;
    } 

    dispatch({
      type: 'Add',
      payload: {
        expense: {
          id: nanoid(),
          text: Title,
          amount: amount,
        },
      },
    });

    setTitle('')
    setAmount('')


  }

  return (
    <>
        <div className='transaction-form'>

                <p>Add New Transactions</p>
                <hr />


                <form onSubmit={formHandler} className='form'>
                    <div className='input-form'>
                    <label htmlFor='nishant'>Text</label>
                    <input type='text' value={Title} onChange={(e)=> setTitle(e.target.value)} placeholder='Enter Text...' id='nishant'/>
                    </div>
                    <div className='input-form'>
                    <label htmlFor='amounts'>Amount<span><br/>(Negative-expenses, Positive-Income)</span></label>
                    <input type='number' value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter Amount...' id='amounts'/>
                    </div>
                    <Button type='submit'/>
                </form>

        </div>
    </>
  )
}

export default Transaction
