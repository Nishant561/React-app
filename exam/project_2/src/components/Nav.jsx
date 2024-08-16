import React from 'react'
import {NavLink ,Link ,Route ,Routes} from 'react-router-dom'
function Nav() {
  return (
   <>
    <div className='w-[85%]  px-3 py-4 bg-black m-auto flex justify-between text-white'>

<h1 className='text-2xl '>Form ✌️</h1>

<div className='flex gap-4'>
<NavLink to='/' className={({isActive})=>`
    text-2xl hover:text-blue-500 transition-colors ${isActive? 'text-orange-500' :  'text-white'}
`}>
  Home
</NavLink>

<NavLink to='/edit' className={({isActive})=>`
          text-2xl hover:text-blue-500 transition-colors ${isActive?'text-orange-500' :'text-white' }
`} >
      Form
</NavLink>

</div>


</div>
   
   </>
  )
}

export default Nav
