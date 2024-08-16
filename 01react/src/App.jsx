import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const handel = ()=>{
    console.log("i am from the app")
  }


  return (
   <>
        <h1>Hello my name is nisahnt</h1>
   
   </>
  )
}

export default App
