import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { removeUser } from '../reducers/UserReducer' 
function User() {
   const {user} = useSelector((state)=>state.UserReducer)
const dispatch = useDispatch()
  return (
    <div className='text-white w-[70%] m-auto bg-pink-500 p-10'>
        <ul>
            {
                user.map((item , index)=>(
                    <li key={item.id} className='w-[50%]'>
                      <h1 className='flex justify-between'>{item.name.firstname} {item.name.lastname}
                        <span onClick={()=> dispatch(removeUser(item.id))} className='text-red ml-8 font-bold cursor-pointer'>X</span>
                      </h1>  
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default User
