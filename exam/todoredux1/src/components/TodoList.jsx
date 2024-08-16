import React from 'react'
import Button from './Button'
import { useSelector,useDispatch } from 'react-redux'
function TodoList() {
  const todoData = useSelector((state)=> state.todo.todos)
  const dispatch = useDispatch()
    
  const deleteHandler = (e)=>{
        console.log(e.currentTarget.dataset.id)
  }
  
  return (
    <>

    {
      todoData.map((items , index)=>(

        <div key={index} className='flex w-[80%] mt-6  justify-center m-auto items-center'>
                
                
                <input type='text' disabled value={items.text} className='w-[60%] rounded-l-lg text-3xl px-2 py-1' />
                <Button id={items.id} delete={deleteHandler} text='delete' />
        </div>
      ))
    }
    
    </>
  )
}

export default TodoList
