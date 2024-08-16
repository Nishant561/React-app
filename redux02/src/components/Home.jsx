import React from 'react'
import { getTheProducts } from '../actions/ProductAction'
import { useEffect } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { removeProduct } from '../reducers/ProductReducer'

function Home() {
    const {product} = useSelector((state) => state.ProductReducer)
    
const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTheProducts())
    },[])

  return (
    <div className='w-[70%] m-auto p-10 bg-pink-500 text-white'>
        <ul>
            {
                product.map((item , index)=>(
                    <li className=' ' key={item.id}>
                        <h1 className='w-full flex justify-between'>{item.title}
                            <span  onClick={()=>dispatch(removeProduct(item.id))} className='font-bold text-red-600 cursor-pointer'>X</span>
                        </h1>

                    </li>
                ))


            }
        </ul>
    </div>
  )
}

export default Home
