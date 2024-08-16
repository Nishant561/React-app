import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from './features/CreateSlice'

function App() {
  const {value} = useSelector((state) => state.counters)
  const dispatch = useDispatch()
 console.log(value)

  return (
    <>
      <h1 className='bg-orange-600 text-white'>This is counter value:{value} </h1>

      <button onClick={()=> dispatch(increment())} className='px-2 py-1 mr-5 mt-5 bg-blue-600 rounded text-white border border-cyan-200'>Increase</button>
      <button onClick={()=> dispatch(decrement())} className='px-2 py-1 mr-5 mt-5 bg-blue-600 rounded text-white border border-cyan-200'>Decrease</button>
      <button onClick={()=> dispatch(incrementAsync(5))} className='px-2 py-1 mr-5 mt-5 bg-blue-600 rounded text-white border border-cyan-200'>IncreaseByFive</button>
    </>
  )
}

export default App
