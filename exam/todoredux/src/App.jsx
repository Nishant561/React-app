import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from './store/Reducer'

function App() {
  const [count, setCount] = useState(0)

  const todoArray = useSelector((state)=> state.todo.todo)
  const dispatch = useDispatch()

  const dispatchHandler = (e)=>{
    dispatch(addTodo())
  }

  console.log(todoArray)

  return (
    <>
        <div>
      <button onClick={dispatchHandler}>Add Todo</button>
      <ul>
        {todoArray.map((todo, index) => (
          <li key={todo.id || index}>{todo.text}</li>
        ))}
      </ul>
    </div>




    </>
  )
}

export default App
