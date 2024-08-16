import React, { useContext, useEffect, useState } from 'react'
import {Nav} from './index'
import { products } from '../utils/Utils'
function Form() {

    const [product , setProduct] = useContext(products)
    const[title , setTitle] = useState('')
    const[url , setUrl] = useState('')
    const[category , setCategory] = useState('')
    const[price , setPrice] = useState('')
    const[description , setdescription] = useState('')

   



    const formHandler = (e)=>{
        
        e.preventDefault()

        if(
            title.trim().length < 4 || url.trim().length < 4 || category.trim().length < 4
            || price < 0 || description.trim().length < 5
        ) alert("Please Enter the valid values")
            
        const data = {
            title,
            url,
            category,
            price,
            description
        }

        

        setProduct([...product , data])
        

        

    }

    useEffect(()=>{
        localStorage.setItem('myProduct' , JSON.stringify(product))
    },[product])


  return (
    <>
        <Nav/>

       <div className='w-[85%] bg-zinc-600 flex flex-col justify-center items-center m-auto h-screen' >
                <h1 className='text-xl mb-2 font-semibold'>Add New Product</h1>
                <form onSubmit={formHandler} className='w-[50%] h-[50%] gap-3  flex flex-col items-center' >

                        <input type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}
                            className='w-[80%] p-1 text-xl rounded'
                        />
                        <input type='url'
                            placeholder='URL'
                            value={url}
                            onChange={(e)=> setUrl(e.target.value)}
                            className='w-[80%] p-1 text-xl rounded'
                        />
                        
                        <div className='flex  w-[80%]  justify-between '>
                        <input type='text'
                            placeholder='Category'
                            value={category}
                            onChange={(e)=> setCategory(e.target.value)}
                            className='w-[49%] p-1 text-xl rounded'
                        />
                        <input type='number'
                            placeholder='Price'
                            value={price}
                            onChange={(e)=> setPrice(e.target.value)}
                            className='w-[49%] p-1 text-xl rounded'
                        />
                        </div>

                        <textarea rows={7} value={description} onChange={(e)=> setdescription(e.target.value)} className='w-[80%] p-1 text-xl rounded' placeholder='Enter Your Product Description'>

                        </textarea>

                        <button type='submit' className='py-1 px-2 border-2 text-white rounded-md transition-all hover:text-green-700 hover:bg-white border-green-600'>
                            Add New Product
                        </button>

                </form>
       </div>
    </>
  )
}

export default Form
