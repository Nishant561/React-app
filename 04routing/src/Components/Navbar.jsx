import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='p-5 flex justify-between items-center bg-orange-400'>
        <h1>Hello</h1>

        <div>
            <NavLink className={({isActive})=> `
            ${isActive? 'text-red-700' : 'text-white' }`} to='/home' >Home</NavLink>
            <NavLink className={({isActive})=> `
            ${isActive? 'text-red-700' : 'text-white' }`} to='/about' >About</NavLink>
            
        </div>
    </div>
  )
}

export default Navbar
