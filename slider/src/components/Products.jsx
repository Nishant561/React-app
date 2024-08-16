import React from 'react'

function Products({val , count}) {
  return (
    <div className='w-full flex border-2 p-[30px] items-center justify-between bg-blue-500 h-[23rem]'>
            <h1>{val.head}</h1>
            <p>{val.para}</p>
    </div>
  )
}

export default Products
