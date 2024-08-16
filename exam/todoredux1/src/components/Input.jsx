import React, { useState } from 'react'
import {Button, TodoList } from './index'

import {useDispatch ,useSelector} from 'react-redux'
import { addTodo } from '../store/Reducer'
function Input() {

    const todoData = useSelector((state)=> state.todo.todos)
    const dispatch = useDispatch()
    const [enteredTodo , setEnteredTodo] = useState('')

    const formHandler =(e)=>{
        
        e.preventDefault()

        dispatch(addTodo(enteredTodo))
        
        setEnteredTodo('')


    }

  return (
    <>
        <form onSubmit={formHandler} className="flex flex-col w-[80%]  justify-center m-auto items-center">
              
                <div className='flex items-center'>
                <input type="text" value={enteredTodo} onChange={(e)=> setEnteredTodo(e.target.value)} placeholder="Enter Your Task" className="w-[60%] text-black rounded-l-lg text-3xl px-2 py-1" />
                <Button text='Add Me' />

                </div>

                <TodoList />
          </form>


    </>
  )
}

export default Input
