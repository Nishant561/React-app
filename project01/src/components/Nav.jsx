import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { set } from 'react-hook-form'
import { Link } from 'react-router-dom'




function Nav() {
    const changeColor = ()=>{
        return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()}, .4)`
    }
    
   
    const{products}=useContext(productContext)

    let category_distinct = products && products.reduce((acc,cv)=>[...acc , cv.category] , [])
    category_distinct = [...new Set(category_distinct)]
    

  return (
    <nav className="w-[15%] h-[100%] bg-gray-500 p-4 flex  flex-col ">
        <a
          href="/"
          className="border px-4 py-2 text-xs rounded text-white hover:bg-blue-400 transition-all duration-300 "
        >
          Add New Products
        </a>

        <hr className="w-[100%] mt-3 mb-3" />

        <div className="">
          <h3 className="font-bold mb-3 text-xl whitespace-nowrap text-gray-400">
            Category-Filter
          </h3>
          {
            category_distinct.map((items ,index)=>(
                <Link to={`/?category=${items}`} key={items} className=" flex items-center gap-2 rounded-md text-white mb-3 text-xs cursor-pointer">
            <div className="w-[6px] h-[6px] rounded-full " style={{background:changeColor() }}></div>

            <h1>{items}</h1>
          </Link>
            ))
          }
          
          
        </div>
      </nav>
  )
}

export default Nav
