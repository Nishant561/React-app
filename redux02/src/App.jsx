import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link ,NavLink, Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
function App() {
 

  return (
    <>
      <div className='w-screen h-screen bg-gray-500'>
          <nav className='w-[70%] relative flex gap-8 justify-center top-3 py-3 px-6 m-auto bg-black '>
                <NavLink  to='/' className={({isActive})=> `${isActive? 'text-orange-500':'text-white'}`}>Home</NavLink>
               <NavLink to='/user' className={({isActive})=> `${isActive? 'text-orange-500':'text-white'}`} >User</NavLink>

    
          </nav>

          <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/user' element={<User/>} />

</Routes>
      </div>
    



    </>
  )
}

export default App
