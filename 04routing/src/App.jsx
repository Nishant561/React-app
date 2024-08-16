import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar,Home } from './Components'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Navbar />
      <Outlet>
        <Home />
      </Outlet>
    </>
  )
}

export default App
