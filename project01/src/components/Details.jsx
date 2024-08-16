import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productContext } from '../utils/Context'

import Loading from './Loading'
import instance from '../utils/Axios'
function Details() {
    const{products} = useContext(productContext)
    const {id} = useParams()
    const [newProducts , setnewProducts] = useState(null)
    
    const singleProducts = async()=>{
        try {

            const {data} = await instance.get(`/products/${id}`)
           
           
            setnewProducts(data)

        } catch (error) {
            console.error('No network' , error)
        }
    }



    useEffect(()=>{singleProducts()},[])


  return newProducts?(
    <div className=' m-auto w-[80%] h-[100%] flex items-center justify-center'>
            <div className='w-[45%] h-[45%] '>
                    <img className='w-full h-full object-contain' src={newProducts.image} alt='' />
            </div>

            <div className='w-[40%] p-[-10%]'>
                <h1 className='font-bold text-4xl'>{newProducts.title}</h1>
                <p className='text-zinc-400 mt-4'>{newProducts.category}</p>
                <p className='mt-4 mb-4'>${newProducts.price}</p>
                <Link className="border mr-4 text-green-400 border-green-400 px-4 py-2 text-xs rounded  hover:bg-green-400 hover:text-white transition-all duration-300 ">Edit</Link>
                <Link className="border border-red-400 px-4 py-2 text-xs rounded text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 ">Delete</Link>
            </div>
    </div>
  ): <Loading/>
}

export default Details
