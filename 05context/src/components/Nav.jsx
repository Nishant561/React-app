import React from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'
import User from './User'
import UserDetails from './UserDetails'

function Nav() {
  return (

    <>
    
    <div className='bg-red-600 flex items-center justify-center py-4 px-8'>
      <div className="text-white">Nishant</div>
      <div className='flex items-center gap-3'>
            <NavLink className={({isActive})=>` ${isActive? 'text-orange-600' : 'text-white'} hover:text-green-600`} to='/' >Home</NavLink>
            <NavLink className={({isActive})=>`${isActive? 'text-orange-600' : 'text-white'} hover:text-green-600` } to='/user' >User</NavLink>
            <NavLink className={({isActive})=>`${isActive? 'text-orange-600' : 'text-white'} hover:text-green-600`} to='/userdetails' >UserDetails</NavLink>

      </div>
    </div>

    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/user' element={<User/>} />
        <Route path='/userdetails' element={<UserDetails/>}/>

    </Routes>


    </>

    


  )
}

export default Nav
