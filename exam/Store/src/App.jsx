import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useSelector, useDispatch} from 'react-redux'
import { addTodo } from './store/Reducer'

function App() {
  const [count, setCount] = useState(0)

  const myTodo = useSelector((state)=> state.todo.todos)
  const dispatch = useDispatch()
  const dispatchHandler = ()=>{
    dispatch(addTodo())
  }
  return (
    <>
        <button onClick={dispatchHandler}>
          Add me
        </button>

        {
          myTodo.map((items, i)=>(
            <li key={i}>{items.text} :: {items.id}</li>
          ))
        }

    </>
  )
}

export default App
