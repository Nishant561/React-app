import React ,{useContext , useState} from 'react'
import { UserContext } from '../context/Context'
import { Outlet ,NavLink } from 'react-router-dom'

function User() {
  const {user , setUser} = useContext(UserContext)


  return (
    <>


    <div className='flex justify-start w-fit  flex-col mt-9'>
      <div>

      <h1 className='font-bold px-4 py-1 bg-blue-500'>Users</h1>

     

      {
        user.map((item)=>(
          <NavLink to={`/user/${item.id}`} className='mt-4 bg-pink-400 text-gray-600 cursor-pointer mb-10' key={item.id}>
              <h1>{item.name}</h1>
          </NavLink>
        ))
      }
      
      

      </div>
    </div>

    <hr/>

    <Outlet />
    </>

  )
}

export default User
